import * as actions from './types/actions';
import * as mutations from './types/mutations';
import UserRatingService from '@/services/user-rating-service/UserRatingService';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  [actions.GET_USER_RATINGS_BY_USER]: async (
    { commit, dispatch },
    userId = null
  ) => {
    try {
      commit(mutations.SET_LOADING, true);
      const userRatings = await UserRatingService.getUserRating(userId);
      commit(mutations.SET_USER_RATINGS_BY_USER, userRatings);
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
