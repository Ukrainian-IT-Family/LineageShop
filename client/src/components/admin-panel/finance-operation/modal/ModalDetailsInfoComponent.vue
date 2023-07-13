<template>
  <BModal :id="`finance-details${financeOperation.id}`" hide-header hide-footer>
    <BContainer>
      <h2 class="font-weight-bold">
        {{ $t('adminPanel.operationInformation') }}
      </h2>
      <BRow class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          {{ $t('adminPanel.requestDate') }}
        </BCol>
        <BCol md="8">
          {{ financeOperation.createdAt | moment('Y.m.D HH:mm') }}

          <span class="text-secondary">
            ({{ financeOperation.createdAt | moment('from') }})
          </span>
        </BCol>
      </BRow>
      <BRow class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          {{ $t('adminPanel.description') }}
        </BCol>
        <BCol md="8">
          <span>{{ financeOperation.type.title }}</span>
          {{ $t('adminPanel.money') }}
        </BCol>
      </BRow>
      <BRow class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          {{ $t('adminPanel.amount') }}
        </BCol>
        <BCol md="8">
          <span v-if="!financeOperation.type.isEnrollment">-</span>
          {{ financeOperation.money }} $
        </BCol>
      </BRow>
      <BRow class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          {{ $t('adminPanel.operationStatus') }}
        </BCol>
        <BCol md="8">
          <p>
            <span :class="`text-${financeOperation.status.variant}`">{{
              financeOperation.status.title
            }}</span>
            <span v-if="financeOperation.status.variant !== ''"> </span>
          </p>
        </BCol>
      </BRow>
      <BRow class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          {{ $t('adminPanel.outputNumber') }}
        </BCol>
        <BCol md="8"> #{{ financeOperation.id }} </BCol>
      </BRow>
      <BRow class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          <span>{{ $t('adminPanel.recipient') }}</span>
        </BCol>
        <BCol md="8">
          {{ financeOperation.wallet.info }}
          <FontAwesomeIcon
            :icon="['fas', 'credit-card']"
            size="1x"
            class="ml-1"
          />
        </BCol>
      </BRow>
      <BRow class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          <span v-if="!financeOperation.type.isEnrollment">{{ $t('adminPanel.toRecipient') }}</span>
          <span v-else>{{ $t('adminPanel.toSender') }}</span>
        </BCol>
        <BCol md="8">
          <span v-if="financeOperation.type.isEnrollment">
            -
          </span>
          {{ getTransferWithCommission }}
          <span v-if="financeOperation.wallet.walletType">
            {{ financeOperation.wallet.walletType.walletSymbol }}
          </span>
        </BCol>
      </BRow>
      <BRow v-if="!isNeedButtonCanceled" class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          <span>
            {{ $t('adminPanel.cancellationDate') }}
          </span>
        </BCol>
        <BCol md="8">
          {{ financeOperation.canceledAt | moment('Y.m.D HH:mm') }}
        </BCol>
      </BRow>
      <BRow v-if="!isNeedButtonCanceled" class="pt-3">
        <BCol md="4" class="font-weight-bold text-secondary">
          <span>
            {{ $t('adminPanel.reasonForCancellation') }}
          </span>
        </BCol>
        <BCol md="8">
          {{ financeOperation.canceledInfo }}
        </BCol>
      </BRow>
    </BContainer>
  </BModal>
</template>

<script>
import { mapActions } from 'vuex';
import * as financeOperationsActions from '@/store/modules/finance-operation/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  name: 'ModalDetailsInfoComponent',
  data() {
    return {
      transferWithCommission: null,
      commissionPercentage: 2,
      status: this.$getConst('FINANCE_OPERATION_STATUS').EXECUTED
    };
  },
  props: {
    financeOperation: {
      id: Number,
      money: String,
      status: {
        title: String,
        variant: String,
        value: Number,
        isExecuted: Boolean,
        isCanceled: Boolean
      },
      createdAt: String,
      wallet: {
        id: Number,
        info: String,
        walletType: {
          id: Number,
          name: String,
          walletSymbol: String
        }
      },
      canceledAt: String,
      canceledInfo: String
    }
  },
  computed: {
    getTransferWithCommission() {
      if (
        this.financeOperation.type.value ===
        this.$getConst('FINANCE_OPERATION_TYPE').WRITE_OFFS
      ) {
        return (
          (this.financeOperation.money / 100) *
          (100 - this.commissionPercentage)
        ).toFixed(2);
      }
      return (
        (this.financeOperation.money / 100) *
        (100 + this.commissionPercentage)
      ).toFixed(2);
    },
    isNeedButtonCanceled() {
      return !(
        this.financeOperation.status.isExecuted ||
        this.financeOperation.status.isCanceled
      );
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide(`finance-details${this.financeOperation.id}`);
    },
    ...mapActions('FinanceOperation', {
      changeStatusFinanceOperation:
        financeOperationsActions.CHANGE_STATUS_FINANCE_OPERATION_TO_CANCEL
    }),
    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),
    async onChangeStatusFinanceOperation() {
      try {
        await this.changeStatusFinanceOperation(this.financeOperation.id);
        await this.closeModal();
      } catch (error) {
        this.setErrorNotification(error);
      }
    }
  }
};
</script>

<style scoped></style>
