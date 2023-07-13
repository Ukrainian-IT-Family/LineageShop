<template>
  <div>
    <div class="text-uppercase text-secondary mb-3">
      {{ $t('adminPanel.orders') }}
    </div>
    <BRow>
      <BCol md="2">
        <BFormInput
          v-model="orderId"
          @input="inputId"
          type="number"
          :placeholder="$t('adminPanel.searchByID')"
          class="shadow-none"
        ></BFormInput>
      </BCol>
      <BCol md="4">
        <BFormInput
          v-model="userCustomerLogin"
          @input="inputUserLogin"
          type="text"
          :placeholder="$t('adminPanel.searchByUser')"
          class="shadow-none"
        ></BFormInput>
      </BCol>
      <BCol md="4">
        <BFormInput
          v-model="userSellerLogin"
          @input="inputUserLogin"
          type="text"
          :placeholder="$t('adminPanel.searchBySeller')"
          class="shadow-none"
        ></BFormInput>
      </BCol>
      <BCol md="2">
        <BButton @click="onSetOrderByCriteria" class="shadow-none">
          {{ $t('adminPanel.Search') }}
        </BButton>
      </BCol>
    </BRow>
    <OrderAdminPanelTable
      v-if="isSetOrders"
      :orders="orders"
    ></OrderAdminPanelTable>
    <EmptyAdminPanelComponent v-else>{{ $t('adminPanel.orderCount') }}</EmptyAdminPanelComponent>
  </div>
</template>

<script>
import OrderAdminPanelTable from './table/OrderAdminPanelTable';
import EmptyAdminPanelComponent from '../EmptyAdminPanelComponent';
import * as orderGetters from '@/store/modules/order/types/getters';
import * as orderActions from '@/store/modules/order/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: 'OrderAdminPanelComponent',
  components: {
    OrderAdminPanelTable,
    EmptyAdminPanelComponent
  },
  data() {
    return {
      orderId: '',
      userCustomerLogin: '',
      userSellerLogin: ''
    };
  },
  computed: {
    ...mapGetters('order', {
      orders: orderGetters.GET_ORDERS
    }),
    isSetOrders() {
      return !_.isEmpty(this.orders);
    }
  },
  methods: {
    ...mapActions('order', {
      getOrdersByCriteria: orderActions.GET_ORDERS
    }),
    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),
    inputId() {
      this.userCustomerLogin = '';
      this.userSellerLogin = '';
    },
    inputUserLogin() {
      this.orderId = '';
    },
    async onSetOrderByCriteria() {
      await this.setOrdersByCriteria();
    },
    async setOrdersByCriteria() {
      try {
        await this.getOrdersByCriteria({
          id: this.orderId,
          userCustomerLogin: this.userCustomerLogin,
          userSellerLogin: this.userSellerLogin
        });
      } catch (error) {
        this.setErrorNotification(error);
      }
    }
  },
  async mounted() {
    await this.setOrdersByCriteria();
  }
};
</script>

<style scoped></style>
