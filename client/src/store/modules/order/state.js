import loading from '@/store/mixins/loading';

export default {
  loading: loading.state.loading,
  orders: {},
  purchases: {},
  sales: {},
  order: {}
};
