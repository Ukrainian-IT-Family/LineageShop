<template>
  <BContainer>
    <BRow class="page-title border-0 mb-0">
      <BCol>
        <h1>{{ $t('myPurchases.myPurchases') }}</h1>
      </BCol>
    </BRow>
    <BRow>
      <BCol md="3">
        <BFormInput
          @input="purchaseId"
          type="text"
          :placeholder="$t('myPurchases.searchByOrderID')"
          v-model="purchaseId"
          class="shadow-none"
          size="sm"
        />
      </BCol>
      <BCol md="3">
        <BFormInput
          @input="sellerLogin"
          type="text"
          :placeholder="$t('myPurchases.searchBySeller')"
          v-model="sellerLogin"
          class="shadow-none"
          size="sm"
        />
      </BCol>
      <BCol md="3">
        <BFormSelect
          v-model="purchaseStatus"
          size="sm"
          @change="purchaseStatus"
        >
          <BFormSelectOption value="">
            {{ $t('myPurchases.searchByStatus') }}
          </BFormSelectOption>
          <BFormSelectOption :value="$getConst('ORDER_STATUS').CREATED">
            {{ $t('myPurchases.created') }}
          </BFormSelectOption>
          <BFormSelectOption :value="$getConst('ORDER_STATUS').CLOSED">
            {{ $t('myPurchases.closed') }}
          </BFormSelectOption>
          <BFormSelectOption :value="$getConst('ORDER_STATUS').CONFIRMED">
            {{ $t('myPurchases.confirmed') }}
          </BFormSelectOption>
        </BFormSelect>
      </BCol>
      <BCol md="3">
        <BButton
          @click="fetchPurchasesByCriteria"
          class="shadow-none"
          size="sm"
        >
          {{ $t('myPurchases.show') }}
        </BButton>
      </BCol>
    </BRow>
    <BRow>
      <div v-if="loading" class="d-flex justify-content-center w-100">
        <Loading/>
      </div>
      <PurchasesListTableComponent
        v-else-if="setOrderType && !loading"
        :orders="purchases"
        :orderType="setOrderType"
        class="mt-2"
      />
      <EmptyPurchasesComponent v-else />
    </BRow>
  </BContainer>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import * as orderGetters from '@/store/modules/order/types/getters';
import * as orderActions from '@/store/modules/order/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';
import PurchasesListTableComponent from '@/components/my-order/PurchasesListTableComponent';
import EmptyPurchasesComponent from '@/components/my-order/EmptyPurchasesComponent';
import _ from 'lodash';
import Loading from '@/components/common/Loading.vue';

export default {
  name: 'MyPurchases',
  components: {
    Loading,
    PurchasesListTableComponent,
    EmptyPurchasesComponent
  },
  data() {
    return {
      purchaseId: '',
      sellerLogin: '',
      purchaseStatus: ''
    };
  },
  computed: {
    ...mapGetters('order', {
      purchases: orderGetters.GET_PURCHASES
    }),
    ...mapState({
      loading: (state) => state.order.loading,
    }),
    setOrderType() {
      if (!_.isEmpty(this.purchases)) {
        return this.$getConst('ORDER_TYPE').PURCHASES;
      }
      return null;
    }
  },
  methods: {
    ...mapActions('order', {
      getPurchasesForCurrentUser: orderActions.GET_PURCHASES
    }),

    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),

    fetchPurchasesByCriteria() {
      let data = {
        orderId: this.purchaseId,
        sellerLogin: this.sellerLogin,
        orderStatus: this.purchaseStatus
      };
      this.getPurchasesForCurrentUser(data);
    }
  },

  async mounted() {
    try {
      await this.getPurchasesForCurrentUser();
    } catch (error) {
      this.setErrorNotification(error);
    }
  }
};
</script>

<style scoped></style>
