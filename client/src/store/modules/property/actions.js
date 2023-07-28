import * as actions from './types/actions';
import * as mutations from './types/mutations';
import PropertyService from '@/services/propertey-service/PropertyService';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  [actions.GET_CURRENT_PROPERTIES]: async (
    { commit, dispatch },
    categoryId
  ) => {
    try {

      commit(mutations.SET_LOADING, true);
      const currentProperties = await PropertyService.getCurrentProperties(
        categoryId
      );
      commit(mutations.SET_CURRENT_PROPERTIES, currentProperties);
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
