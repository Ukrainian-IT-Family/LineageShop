import * as actions from './types/actions';
import * as mutations from './types/mutations';
import OrderService from '@/services/order-service/OrderService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_ORDERS]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const orders = await OrderService.getAllOrders(data);
      commit(mutations.SET_ORDERS, orders);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_PURCHASES]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const purchases = await OrderService.getPurchasesForCurrentUser(data);
      commit(mutations.SET_PURCHASES, purchases);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_SALES]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const sales = await OrderService.getSalesForCurrentUser(data);
      commit(mutations.SET_SALES, sales);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },

  [actions.CHANGE_ORDER_STATUS]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const order = await OrderService.changeOrderStatus(data);

      commit(mutations.UPDATE_ORDER, order);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },

  [actions.ADD_ORDER]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const order = await OrderService.addOrder(data);

      commit(mutations.SET_ORDER, order);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_ORDER]: async ({ commit, dispatch }, orderId) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const order = await OrderService.getOrder(orderId);

      commit(mutations.SET_ORDER, order);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.CONFIRM_ORDER]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const order = await OrderService.confirmOrder(data);

      commit(mutations.SET_ORDER, order);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  }
};
