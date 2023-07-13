<template>
  <BContainer>
    <BRow class="page-title border-0 mb-0">
      <BCol>
        <h1>
          {{ $t('financesPage.finance') }}
          <span class="hidden-xs">·</span>
          <span> {{ financeValue }} $ </span>
        </h1>
      </BCol>
    </BRow>
    <BRow>
      <BCol md="4">
        <BFormSelect
          v-model="financeOperationType"
          @change="setFinanceOperationType()"
          class="shadow-none"
        >
          <BFormSelectOption value="">
            {{ $t('financesPage.allOperations') }}
          </BFormSelectOption>
          <BFormSelectOption
            :value="$getConst('FINANCE_OPERATION_TYPE').ENROLLMENT"
          >
            {{ $t('financesPage.enrollment') }}
          </BFormSelectOption>
          <BFormSelectOption
            :value="$getConst('FINANCE_OPERATION_TYPE').WRITE_OFFS"
          >
            {{ $t('financesPage.retirement') }}
          </BFormSelectOption>
        </BFormSelect>
      </BCol>
      <BCol md="8" class="text-right">
        <ModalFormComponent />
        <BButton
          v-b-modal.add-finance-operation
          variant="primary"
          class="font-weight-bold pl-3 pr-3"
        >
          {{ $t('financesPage.withdrawMoney') }}
        </BButton>
      </BCol>
    </BRow>
    <FinanceOperationEmptyPageComponent v-if="isEmptyFinanceOperation" />
    <FinanceListComponent
      :financeOperations="financeOperations(orderType, orderDirection)"
    />
  </BContainer>
</template>

<script>
import FinanceListComponent from '@/components/finances/FinanceListComponent';
import ModalFormComponent from '@/components/finances/modal/ModalFormComponent';
import FinanceOperationEmptyPageComponent from '@/components/finances/FinanceOperationEmptyPageComponent';
import * as financeOperationsGetters from '@/store/modules/finance-operation/types/getters';
import * as financeOperationsActions from '@/store/modules/finance-operation/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Finances',
  components: {
    FinanceListComponent,
    ModalFormComponent,
    FinanceOperationEmptyPageComponent
  },
  data() {
    return {
      financeValue: 0,
      financeOperationType: '',
      orderType: '',
      orderDirection: ''
    };
  },
  computed: {
    isEmptyFinanceOperation() {
      return !_.isEmpty(this.financeOperations);
    },
    ...mapGetters('FinanceOperation', {
      financeOperations: financeOperationsGetters.GET_FINANCE_OPERATIONS
    })
  },
  methods: {
    ...mapActions('FinanceOperation', {
      getFinanceOperationsByType:
        financeOperationsActions.GET_FINANCE_OPERATIONS
    }),
    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),

    async setFinanceOperationType() {
      try {
        await this.getFinanceOperationsByType(this.financeOperationType);
      } catch (error) {
        this.setErrorNotification(error);
      }
    },

    calculateUserBalance() {
      this.financeValue = this.financeOperations(
        this.orderType,
        this.orderDirection
      ).reduce(function(sum, financeOperation) {
        if (financeOperation.status.isExecuted) {
          if (financeOperation.type.isEnrollment) {
            sum = sum + financeOperation.money;
          } else {
            sum = sum - financeOperation.money;
          }
        }
        return sum;
      }, 0);
    }
  },
  async mounted() {
    await this.setFinanceOperationType();
    this.calculateUserBalance();
  }
};
</script>

<style scoped></style>
