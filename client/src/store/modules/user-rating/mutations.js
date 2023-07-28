import * as mutations from './types/mutations';
import { userRatingsMapper } from './normalizer';
import loading from '@/store/mixins/loading';

export default {
  [mutations.SET_LOADING]: loading.mutations.setLoading,
  [mutations.SET_USER_RATINGS_BY_USER]: (state, userRatings) => {
    state.userRatingByUserId = userRatingsMapper(userRatings);
  }
};
