<template>
  <BTableSimple hover>
    <BThead class="border-bottom pb-3">
      <BTr>
        <BTh class="font-weight-bold">{{ $t('myOrder.date') }}</BTh>
        <BTh class="font-weight-bold">{{ $t('myOrder.order') }}</BTh>
        <BTh class="font-weight-bold">{{ $t('myOrder.description') }}</BTh>
        <BTh class="font-weight-bold">{{ $t('myOrder.buyer') }}</BTh>
        <BTh class="font-weight-bold">{{ $t('myOrder.status') }}</BTh>
        <BTh class="font-weight-bold text-right">{{ $t('myOrder.sum') }}</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <template v-for="order in orders">
        <OrderRow
          :key="order.id"
          :order="order"
          :orderType="orderType"
        ></OrderRow>
      </template>
    </BTbody>
  </BTableSimple>
</template>

<script>
import OrderRow from '@/components/my-order/OrderRow';

export default {
  name: 'SalesListTableComponent',
  components: {
    OrderRow
  },
  props: {
    orderType: Number,
    orders: Object
  }
};
</script>

<style scoped></style>
