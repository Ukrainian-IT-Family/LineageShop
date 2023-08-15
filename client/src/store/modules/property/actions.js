import * as actions from './types/actions';
import * as mutations from './types/mutations';
import PropertyService from '@/services/propertey-service/PropertyService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_CURRENT_PROPERTIES]: async (
    { commit, dispatch },
    categoryId
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const currentProperties = await PropertyService.getCurrentProperties(
        categoryId
      );
      commit(mutations.SET_CURRENT_PROPERTIES, currentProperties);
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
