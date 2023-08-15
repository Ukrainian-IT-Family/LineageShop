import * as actions from './types/actions';
import SupportService from '@/services/support-service/SupportService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import * as mutations from './types/mutations';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.SEND_SUPPORT_REQUEST]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await SupportService.sendSupportRequest(data);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
      return false;
    }
  },
  [actions.SEND_SUPPORT_REQUEST_MESSAGE]: async (
    { commit, dispatch },
    data
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const newMessage = await SupportService.sendSupportRequestMessage(data);
      commit(mutations.ADD_SUPPORT_REQUEST_MESSAGE, newMessage);
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
  [actions.GET_SUPPORT_REQUEST]: async (
    { commit, dispatch },
    filtersValues
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const data = await SupportService.getSupportRequest(filtersValues);
      commit(mutations.SET_SUPPORT_REQUEST, data);
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
  [actions.GET_SUPPORT_REQUEST_MESSAGES]: async ({ commit, dispatch }, id) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const data = await SupportService.getAllSupportRequestMessages(id);
      commit(mutations.SET_SUPPORT_REQUEST_MESSAGES, data);
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
  [actions.SET_SUPPORT_REQUEST_STATUS]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const updatedSupportStatusRequest = {
        requestId: data.requestId,
        requestStatusId: data.requestStatusId
      };
      const supportRequest = await SupportService.updateSupportStatusRequest(
        updatedSupportStatusRequest
      );
      commit(mutations.UPDATE_SUPPORT_REQUEST, supportRequest);
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
  [actions.GET_SUPPORT_REQUESTS_BY_CRITERIA]: async (
    { commit, dispatch },
    filtersValues
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const data = await SupportService.getSupportRequestsByCriteria(
        filtersValues
      );
      commit(mutations.SET_SUPPORT_REQUESTS, data);
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
