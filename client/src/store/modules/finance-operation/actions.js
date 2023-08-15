import * as actions from './types/actions';
import * as mutations from './types/mutations';
import FinanceOperationService from '@/services/finance-operation-service/FinanceOperationService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.ADD_FINANCE_OPERATION]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const financeOperation = await FinanceOperationService.addFinanceOperation(
        data
      );
      commit(mutations.ADD_FINANCE_OPERATION, financeOperation);
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
  [actions.CHANGE_STATUS_FINANCE_OPERATION]: async (
    { commit, dispatch },
    data
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const financeOperation = await FinanceOperationService.changeFinanceOperationStatus(
        data
      );
      commit(mutations.CHANGE_STATUS_FINANCE_OPERATION, financeOperation);
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
  [actions.CHANGE_STATUS_FINANCE_OPERATION_TO_CANCEL]: async (
    { commit, dispatch },
    data
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const changeFinanceOperationStatusToCancel = await FinanceOperationService.changeFinanceOperationStatusToCancel(
        data
      );
      commit(
        mutations.CHANGE_STATUS_FINANCE_OPERATION,
        changeFinanceOperationStatusToCancel
      );
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
  [actions.GET_FINANCE_OPERATION]: async ({ commit, dispatch }, id) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const financeOperation = await FinanceOperationService.getFinanceOperationById(
        id
      );
      commit(mutations.SET_FINANCE_OPERATION, financeOperation);
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
  [actions.GET_FINANCE_OPERATIONS]: async ({ commit, dispatch }, type) => {
    try {
      commit(SET_LOADING, true, { root: true });

      const financeOperations = await FinanceOperationService.getFinanceOperationsByType(
        type
      );
      commit(mutations.SET_FINANCE_OPERATIONS, financeOperations);
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
  [actions.GET_ALL_FINANCE_OPERATIONS]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const financeOperations = await FinanceOperationService.getAllFinanceOperations(
        data
      );
      commit(mutations.SET_FINANCE_OPERATIONS, financeOperations);
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
