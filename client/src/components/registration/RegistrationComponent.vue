<template>
  <BCol md="4" ld="12">
    <BForm @submit.prevent="onRegister">
      <BFormGroup id="login-group" :label="$t('registration.login')" label-for="login-input">
        <BFormInput
          id="login-input"
          v-model="$v.registerData.login.$model"
          @blur="clickLogin"
          class="shadow-none"
        ></BFormInput>
        <div
          class="error bg-white text-danger mb-3"
          v-if="!$v.registerData.login.required && clickedLogin"
        >
          {{ $t('registration.enterYourUsername') }}
        </div>
        <div
          class="error bg-white text-danger mb-3"
          v-if="!$v.registerData.login.minLength && clickedLogin"
        >
          {{ $t('registration.minimumLoginLength') }}
          {{ $v.registerData.login.$params.minLength.min }} {{ $t('registration.character') }}
        </div>
      </BFormGroup>
      <BFormGroup id="email-group" :label="$t('registration.email')" label-for="email-input">
        <BFormInput
          id="email-input"
          type="text"
          v-model="$v.registerData.email.$model"
          @blur="clickEmail"
          class="shadow-none"
        ></BFormInput>
        <div
          class="error bg-white text-danger mb-3"
          v-if="!$v.registerData.email.required && clickedEmail"
        >
          {{ $t('registration.enterEmail') }}
        </div>
        <div
          class="error bg-white text-danger mb-3"
          v-if="!$v.registerData.email.email && clickedEmail"
        >
          {{ $t('registration.invalidEmail') }}
        </div>
      </BFormGroup>
      <BFormGroup id="password-group" :label="$t('registration.password')" label-for="password-input">
        <BFormInput
          id="password-input"
          type="password"
          v-model="$v.registerData.password.$model"
          @blur="clickPassword"
          class="shadow-none"
        ></BFormInput>
        <div
          class="error bg-white text-danger mb-3"
          v-if="!$v.registerData.password.required && clickedPassword"
        >
          {{ $t('registration.enterPassword') }}
        </div>
        <div
          class="error bg-white text-danger mb-3"
          v-if="!$v.registerData.password.minLength && clickedPassword"
        >
          {{ $t('registration.passwordMustBeAtLeast') }}
          {{ $v.registerData.password.$params.minLength.min }} {{ $t('registration.characters') }}
        </div>
      </BFormGroup>
      <BFormGroup
        id="confirm-password-group"
        :label="$t('registration.repeatPassword')"
        label-for="confirm-password-input"
      >
        <BFormInput
          id="confirm-password-input"
          type="password"
          v-model="$v.registerData.password_confirmation.$model"
          @blur="clickConfirmationPassword"
          class="shadow-none"
        ></BFormInput>
        <div
          class="error bg-white text-danger mb-3"
          v-if="
            !$v.registerData.password_confirmation.required &&
              clickedConfirmationPassword
          "
        >
          {{ $t('registration.repeatPasswordLower') }}
        </div>
        <div
          class="error bg-white text-danger mb-3"
          v-if="
            !$v.registerData.password_confirmation.sameAsPassword &&
              clickedConfirmationPassword
          "
        >
          {{ $t('registration.passwordsMustMatch') }}
        </div>
      </BFormGroup>
      <BFormCheckbox
        class="mb-3"
        v-model="registerData.license"
        name="check-button"
        switch
      >
        {{ $t('registration.license') }}
      </BFormCheckbox>
      <BButton type="submit" variant="primary">{{ $t('registration.register') }}</BButton>
    </BForm>
  </BCol>
</template>

<script>
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import * as authActions from '@/store/modules/auth/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  name: 'RegistrationComponent',
  data() {
    return {
      clickedLogin: false,
      clickedEmail: false,
      clickedPassword: false,
      clickedConfirmationPassword: false,
      registerData: {
        login: '',
        email: '',
        password: '',
        password_confirmation: '',
        license: false
      }
    };
  },
  validations: {
    registerData: {
      login: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      password_confirmation: {
        required,
        minLength: minLength(8),
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    ...mapActions('AuthService', {
      registerUser: authActions.REGISTER_USER
    }),

    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),

    clickLogin() {
      this.clickedLogin = true;
    },
    clickEmail() {
      this.clickedEmail = true;
    },
    clickPassword() {
      this.clickedPassword = true;
    },
    clickConfirmationPassword() {
      this.clickedConfirmationPassword = true;
    },
    validationRegisterForm() {
      this.$v.$touch();
      return this.$v.$invalid;
    },
    async onRegister() {
      if (!this.validationRegisterForm()) {
        try {
          const isRegisterSuccessful = await this.registerUser(this.registerData);

          if (isRegisterSuccessful !== false) {
            await this.$router.push({name: 'EmailVerification', query: {id: isRegisterSuccessful.id}});
          }
        } catch (error) {
          this.setErrorNotification(error);
        }
      }
    }
  }
};
</script>

<style scoped></style>
