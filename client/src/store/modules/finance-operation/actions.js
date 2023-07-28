import * as actions from './types/actions';
import * as mutations from './types/mutations';
import FinanceOperationService from '@/services/finance-operation-service/FinanceOperationService';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  [actions.ADD_FINANCE_OPERATION]: async ({ commit, dispatch }, data) => {
    try {
      const financeOperation = await FinanceOperationService.addFinanceOperation(
        data
      );
      commit(mutations.ADD_FINANCE_OPERATION, financeOperation);
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.CHANGE_STATUS_FINANCE_OPERATION]: async (
    { commit, dispatch },
    data
  ) => {
    try {
      const financeOperation = await FinanceOperationService.changeFinanceOperationStatus(
        data
      );
      commit(mutations.CHANGE_STATUS_FINANCE_OPERATION, financeOperation);
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.CHANGE_STATUS_FINANCE_OPERATION_TO_CANCEL]: async (
    { commit, dispatch },
    data
  ) => {
    try {
      const changeFinanceOperationStatusToCancel = await FinanceOperationService.changeFinanceOperationStatusToCancel(
        data
      );
      commit(
        mutations.CHANGE_STATUS_FINANCE_OPERATION,
        changeFinanceOperationStatusToCancel
      );
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_FINANCE_OPERATION]: async ({ commit, dispatch }, id) => {
    try {
      commit(mutations.SET_LOADING, true);
      const financeOperation = await FinanceOperationService.getFinanceOperationById(
        id
      );
      commit(mutations.SET_FINANCE_OPERATION, financeOperation);
      commit(mutations.SET_LOADING, false);
    } catch (error) {
      commit(mutations.SET_LOADING, false);
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_FINANCE_OPERATIONS]: async ({ commit, dispatch }, type) => {
    try {
      commit(mutations.SET_LOADING, true);
      const financeOperations = await FinanceOperationService.getFinanceOperationsByType(
        type
      );
      commit(mutations.SET_FINANCE_OPERATIONS, financeOperations);
      commit(mutations.SET_LOADING, false);
    } catch (error) {
      commit(mutations.SET_LOADING, false);
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_ALL_FINANCE_OPERATIONS]: async ({ commit, dispatch }, data) => {
    try {
      commit(mutations.SET_LOADING, true);
      const financeOperations = await FinanceOperationService.getAllFinanceOperations(
        data
      );
      commit(mutations.SET_FINANCE_OPERATIONS, financeOperations);
      commit(mutations.SET_LOADING, false);
    } catch (error) {
      commit(mutations.SET_LOADING, false);
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  }
};
