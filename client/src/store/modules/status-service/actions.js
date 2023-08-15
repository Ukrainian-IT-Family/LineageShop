import * as actions from './types/actions';
import * as mutations from './types/mutations';
import statusService from '@/services/status-service/StatusService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_SERVICE_STATUS_BY_NAME]: async (
    { commit, dispatch },
    serviceName
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      commit(mutations.FETCH_SERVICE_STATUS, serviceName);
      const status = await statusService.getStatusByService(serviceName);

      commit(mutations.SET_SERVICE_STATUS, {
        id: serviceName,
        data: {
          statusText: status.value,
          status: true
        }
      });
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
