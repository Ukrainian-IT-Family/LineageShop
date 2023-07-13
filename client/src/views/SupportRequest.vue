<template>
  <BContainer>
    <BRow>
      <BCol md="6" ld="12">
        <BForm @submit.prevent="onSendSupportRequest">
          <BFormGroup class="shadow-none">
            <label>{{ $t('supportRequest.email') }}</label>
            <BFormInput
              v-model="$v.sendSupportRequestData.email.$model"
              class="shadow-none"
              @blur="clickEmail"
            ></BFormInput>
            <div
              class="error bg-white text-danger mb-2"
              v-if="!$v.sendSupportRequestData.email.required && clickedEmail"
            >
              {{ $t('supportRequest.enterEmail') }}
            </div>
            <div
              class="error bg-white text-danger mb-2"
              v-if="!$v.sendSupportRequestData.email.email && clickedEmail"
            >
              {{ $t('supportRequest.invalidEmail') }}
            </div>
          </BFormGroup>
          <BFormGroup>
            <label>{{ $t('supportRequest.subject') }}</label>
            <BFormSelect
              v-model="$v.sendSupportRequestData.subject.$model"
              :options="options"
              class="shadow-none"
            ></BFormSelect>
          </BFormGroup>
          <BFormGroup>
            <label>{{ $t('supportRequest.login') }}</label>
            <BFormInput
              v-model="$v.sendSupportRequestData.login.$model"
              class="shadow-none"
              @blur="clickLogin"
            ></BFormInput>
            <div
              class="error bg-white text-danger mb-2"
              v-if="!$v.sendSupportRequestData.login.required && clickedLogin"
            >
              {{ $t('supportRequest.enterLogin') }}
            </div>
          </BFormGroup>
          <BFormGroup>
            <label>{{ $t('supportRequest.orderNumber') }}</label>
            <BFormInput
              v-model="sendSupportRequestData.orderId"
              class="shadow-none"
              @blur="clickOrderId"
            ></BFormInput>
            <div
              class="error bg-white text-danger mb-2"
              v-if="
                !$v.sendSupportRequestData.orderId.integer && clickedOrderId
              "
            >
              {{ $t('supportRequest.cannotContainLetters') }}
            </div>
          </BFormGroup>
          <BFormGroup>
            <label>{{ $t('supportRequest.text') }}</label>
            <BFormTextarea
              v-model="$v.sendSupportRequestData.text.$model"
              class="shadow-none"
              @blur="clickText"
            ></BFormTextarea>
            <div
              class="error bg-white text-danger mb-2"
              v-if="!$v.sendSupportRequestData.text.required && clickedText"
            >
              {{ $t('supportRequest.emptyText') }}
            </div>
          </BFormGroup>
          <BButton type="submit" variant="primary" class="shadow-none"
            >{{ $t('supportRequest.send') }}</BButton
          >
        </BForm>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script>
import * as supportActions from '@/store/modules/support-request/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';
import { mapActions, mapGetters } from 'vuex';
import { required, email, integer } from 'vuelidate/lib/validators';
import * as authGetters from '@/store/modules/auth/types/getters';

export default {
  name: 'SupportRequest',
  data() {
    return {
      sendSupportRequestData: {
        email: '',
        subject: 0,
        orderId: null,
        login: '',
        text: ''
      },
      clickedEmail: false,
      clickedLogin: false,
      clickedText: false,
      clickedOrderId: false,
      options: [
        { value: 0, text: '-' },
        {
          value: 1,
          text: this.$t('supportRequest.option1')
        },
        {
          value: 2,
          text: this.$t('supportRequest.option2')
        },
        {
          value: 3,
          text: this.$t('supportRequest.option3')
        },
        {
          value: 4,
          text: this.$t('supportRequest.option4')
        },
        {
          value: 5,
          text: this.$t('supportRequest.option5')
        },
        {
          value: 6,
          text: this.$t('supportRequest.option6')
        },
        {
          value: 7,
          text: this.$t('supportRequest.option7')
        },
        {
          value: 8,
          text: this.$t('supportRequest.option8')
        },
        {
          value: 9,
          text: this.$t('supportRequest.option9')
        },
        {
          value: 10,
          text: this.$t('supportRequest.option10')
        },
        {
          value: 11,
          text: this.$t('supportRequest.option11')
        },
        {
          value: 12,
          text: this.$t('supportRequest.option12')
        }
      ]
    };
  },
  validations: {
    sendSupportRequestData: {
      email: {
        required,
        email
      },
      subject: {
        integer
      },
      login: {
        required
      },
      orderId: {
        integer
      },
      text: {
        required
      }
    }
  },
  computed: {
    ...mapGetters('AuthService', {
      getLoggedUser: authGetters.GET_LOGGED_USER
    })
  },
  methods: {
    ...mapActions('SupportRequest', {
      sendSupportRequest: supportActions.SEND_SUPPORT_REQUEST
    }),
    ...mapActions('notification', {
      setSuccessNotification: notificationActions.SET_SUCCESS_NOTIFICATION
    }),
    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),
    clickEmail() {
      this.clickedEmail = true;
    },
    clickLogin() {
      this.clickedLogin = true;
    },
    clickText() {
      this.clickedText = true;
    },
    clickOrderId() {
      this.clickedOrderId = true;
    },
    validationSupportRequestForm() {
      this.$v.$touch();
      return this.$v.$invalid;
    },
    async onSendSupportRequest() {
      if (!this.validationSupportRequestForm()) {
        try {
          let successRequest = await this.sendSupportRequest(
            this.sendSupportRequestData
          );
          if (successRequest !== false) {
            await this.setSuccessNotification('Запрос отправлен');
            this.sendSupportRequestData = {
              email: this.getLoggedUser.email,
              subject: 0,
              orderId: null,
              login: this.getLoggedUser.login,
              text: ''
            };
            this.clickedEmail = false;
            this.clickedLogin = false;
            this.clickedText = false;
            this.clickedOrderId = false;
          }
        } catch (error) {
          this.setErrorNotification(error);
        }
      }
    },
    setUserLoginEmail() {
      this.$v.sendSupportRequestData.email.$model = this.getLoggedUser.email;
      this.$v.sendSupportRequestData.login.$model = this.getLoggedUser.login;
    }
  },
  mounted() {
    this.setUserLoginEmail();
  }
};
</script>

<style scoped></style>
