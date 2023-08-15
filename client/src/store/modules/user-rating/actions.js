import * as actions from './types/actions';
import * as mutations from './types/mutations';
import UserRatingService from '@/services/user-rating-service/UserRatingService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_USER_RATINGS_BY_USER]: async (
    { commit, dispatch },
    userId = null
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const userRatings = await UserRatingService.getUserRating(userId);
      commit(mutations.SET_USER_RATINGS_BY_USER, userRatings);
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
