<template>
  <BContainer>
    <BRow>
      <BCol md="3">
        <BFormInput
          @input="inputId"
          type="text"
          :placeholder="$t('adminPanel.searchByID')"
          v-model="financeOperationById"
          class="shadow-none"
          size="sm"
        />
      </BCol>
      <BCol md="3">
        <BFormInput
          @input="inputUserLogin"
          type="text"
          :placeholder="$t('adminPanel.searchByUser')"
          v-model="financeOperationByUser"
          class="shadow-none"
          size="sm"
        />
      </BCol>
      <BCol md="3">
        <BFormSelect v-model="financeOperationsByStatusId" size="sm">
          <BFormSelectOption value="">
            {{ $t('adminPanel.searchByStatus') }}
          </BFormSelectOption>
          <BFormSelectOption
            :value="$getConst('FINANCE_OPERATION_STATUS').CREATED"
          >
            {{ $t('adminPanel.created') }}
          </BFormSelectOption>
          <BFormSelectOption
            :value="$getConst('FINANCE_OPERATION_STATUS').EXECUTED"
          >
            {{ $t('adminPanel.done') }}
          </BFormSelectOption>
          <BFormSelectOption
            :value="$getConst('FINANCE_OPERATION_STATUS').PENDING"
          >
            {{ $t('adminPanel.waiting') }}
          </BFormSelectOption>
          <BFormSelectOption
            :value="$getConst('FINANCE_OPERATION_STATUS').CANCELED"
          >
            {{ $t('adminPanel.canceled') }}
          </BFormSelectOption>
        </BFormSelect>
      </BCol>
      <BCol md="3">
        <BButton @click="onGetFinanceOperationByCriteria" class="shadow-none">
          {{ $t('adminPanel.search') }}
        </BButton>
      </BCol>
    </BRow>
    <BRow class="w-75">
      <BCol md="3">
        <BFormDatepicker
          type="text"
          :placeholder="$t('adminPanel.from')"
          class="shadow-none w-10"
          size="sm"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: '2-digit'
          }"
          v-model="financeOperationsStartDate"
        />
      </BCol>
      <BCol md="3">
        <BFormDatepicker
          type="text"
          :placeholder="$t('adminPanel.to')"
          class="shadow-none w-10"
          size="sm"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: '2-digit'
          }"
          v-model="financeOperationsEndDate"
        />
      </BCol>
    </BRow>

    <div v-if="loading" class="d-flex justify-content-center">
      <Loading/>
    </div>
    <FinanceOperationAdminPanelTable v-else
      :financeOperations="financeOperations(orderType, orderDirection)"
      @orderParameters="setOrderParameters"
    />
  </BContainer>
</template>

<script>
import FinanceOperationAdminPanelTable from './table/FinanceOperationAdminPanelTable';
import * as financeOperationActions from '@/store/modules/finance-operation/types/actions';
import * as financeOperationGetters from '@/store/modules/finance-operation/types/getters';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {mapActions, mapGetters, mapState} from 'vuex';
import Loading from '@/components/common/Loading.vue';

export default {
  name: 'FinanceOperationAdminPanelComponent',
  components: {
    Loading,
    FinanceOperationAdminPanelTable
  },
  data() {
    return {
      financeOperationById: '',
      financeOperationByUser: '',
      financeOperationsByStatusId: '',
      financeOperationsStartDate: '',
      financeOperationsEndDate: '',
      orderType: '',
      orderDirection: ''
    };
  },
  computed: {
    ...mapGetters('FinanceOperation', {
      financeOperations: financeOperationGetters.GET_FINANCE_OPERATIONS
    }),
    ...mapState({
      loading: (state) => state.FinanceOperation.loading,
    })
  },
  methods: {
    ...mapActions('FinanceOperation', {
      getFinanceOperations: financeOperationActions.GET_ALL_FINANCE_OPERATIONS
    }),
    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),
    inputId() {
      this.financeOperationByUser = '';
    },
    inputUserLogin() {
      this.financeOperationById = '';
    },
    async onGetFinanceOperationByCriteria() {
      await this.setFinanceOperations();
    },
    async setFinanceOperations() {
      try {
        await this.getFinanceOperations({
          orderType: this.orderType,
          orderDirection: this.orderDirection,
          id: this.financeOperationById,
          userLogin: this.financeOperationByUser,
          statusId: this.financeOperationsByStatusId,
          startDate: this.financeOperationsStartDate,
          endDate: this.financeOperationsEndDate
        });
      } catch (error) {
        this.setErrorNotification(error);
      }
    },
    async setOrderParameters(orderParameters) {
      this.orderType = orderParameters.orderType;
      this.orderDirection = orderParameters.orderDirection;
      await this.setFinanceOperations();
    }
  },
  async mounted() {
    await this.setFinanceOperations();
  }
};
</script>

<style scoped></style>
