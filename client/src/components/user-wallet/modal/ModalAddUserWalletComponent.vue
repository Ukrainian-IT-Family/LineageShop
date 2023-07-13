<template>
  <BModal @hide="closeModal" id="add-user-wallet" hide-footer>
    <template #modal-title>
      <h2 class="font-weight-bold">{{ $t('userWallet.addNewWallet') }}</h2>
    </template>
    <BFormGroup>
      <label class="text-uppercase text-secondary fa-xs"
        >{{ $t('userWallet.selectWalletType') }}</label
      >
      <BFormSelect
        v-model="addForm.walletTypeId"
        :options="optionsUserWallets"
        class="shadow-none"
      ></BFormSelect>
    </BFormGroup>
    <BFormGroup>
      <label class="text-uppercase text-secondary fa-xs">{{ $t('userWallet.addCard') }}</label>
      <BFormInput v-model="addForm.info" class="shadow-none"></BFormInput>
    </BFormGroup>
    <BButton @click="onAddUserWallet" class="col-12 mb-2" variant="primary"
      >{{ $t('userWallet.add') }}</BButton
    >
  </BModal>
</template>

<script>
import * as userWalletActions from '@/store/modules/user-wallet/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';
import { mapActions } from 'vuex';

export default {
  name: 'ModalAddUserWalletComponent',
  data() {
    return {
      addForm: {
        info: null,
        walletTypeId: null
      }
    };
  },
  props: {
    optionsUserWallets: Array
  },

  methods: {
    ...mapActions('notification', {
      setSuccessNotification: notificationActions.SET_SUCCESS_NOTIFICATION
    }),
    ...mapActions('UserWallet', {
      addUserWallet: userWalletActions.ADD_USER_WALLET
    }),
    closeModal() {
      this.$bvModal.hide('add-user-wallet');
      this.addForm.info = null;
      this.addForm.walletTypeId = null;
    },
    async onAddUserWallet() {
      await this.addUserWallet(this.addForm);
      await this.closeModal();
      await this.setSuccessNotification(this.$t('userWallet.walletAdded'));
    }
  }
};
</script>

<style scoped></style>
