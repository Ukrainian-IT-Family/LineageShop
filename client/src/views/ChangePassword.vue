<template>
  <div class="m-3 m-md-0">
    <TitleComponent>{{ $t('changePassword.changePassword') }}</TitleComponent>
    <BContainer>
      <BRow>
        <BCol md="3" ld="12">
          <BFormGroup>
            <label class="text-uppercase text-secondary fa-xs">{{
              $t('changePassword.currentPassword')
            }}</label>
            <BFormInput
              v-model="passwordData.currentPassword"
              class="shadow-none"
              type="password"
            ></BFormInput>
          </BFormGroup>
          <BFormGroup>
            <label class="text-uppercase text-secondary fa-xs">{{
              $t('changePassword.newPassword')
            }}</label>
            <BFormInput
              v-model="passwordData.newPassword"
              class="shadow-none"
              type="password"
            ></BFormInput>
            <span class="text-secondary fa-swap-opacity fa-xs">{{
              $t('changePassword.minimum')
            }}</span>
          </BFormGroup>
          <BFormGroup>
            <label class="text-uppercase text-secondary fa-xs">{{
              $t('changePassword.confirmPassword')
            }}</label>
            <BFormInput
              v-model="passwordData.confirmNewPassword"
              class="shadow-none"
              type="password"
            ></BFormInput>
          </BFormGroup>
          <BButton
            @click="onChangeUserPassword"
            variant="primary"
            class="shadow-none"
            >{{ $t('changePassword.save') }}</BButton
          >
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script>
import TitleComponent from '@/components/main-layout-blocks/title/TitleComponent';
import * as notificationActions from '@/store/modules/notification/types/actions';
import * as userAction from '@/store/modules/user/types/actions';
import { mapActions } from 'vuex';

export default {
  name: 'ChangePassword',
  components: {
    TitleComponent
  },
  data() {
    return {
      passwordData: {
        currentPassword: null,
        newPassword: null,
        confirmNewPassword: null
      }
    };
  },
  methods: {
    ...mapActions('notification', {
      setSuccessNotification: notificationActions.SET_SUCCESS_NOTIFICATION
    }),
    ...mapActions('User', {
      changeUserPassword: userAction.CHANGE_USER_PASSWORD
    }),
    resetPasswordData() {
      this.passwordData = {
        currentPassword: null,
        newPassword: null,
        confirmNewPassword: null
      };
    },
    async onChangeUserPassword() {
      try {
        await this.changeUserPassword(this.passwordData);
        await this.setSuccessNotification(this.$t('views.passwordChangedSuccessfully'));
        await this.resetPasswordData();
      } catch (error) {
        this.setErrorNotification(error);
      }
    }
  }
};
</script>

<style scoped></style>
