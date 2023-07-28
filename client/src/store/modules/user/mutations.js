import * as mutations from './types/mutations';
import { userMapper, usersMapper } from './normalizer';
import loading from '@/store/mixins/loading';

export default {
  [mutations.SET_LOADING]: loading.mutations.setLoading,
  [mutations.SET_USERS]: (state, users) => {
    state.users = usersMapper(users);
  },
  [mutations.SET_USER]: (state, user) => {
    state.user = userMapper(user);
  }
};
