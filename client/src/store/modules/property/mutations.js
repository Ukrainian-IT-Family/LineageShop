import * as mutations from './types/mutations';
import { propertiesMapper } from './normalizer';
import loading from '@/store/mixins/loading';

export default {
  [mutations.SET_LOADING]: loading.mutations.setLoading,
  [mutations.SET_CURRENT_PROPERTIES]: (state, properties) => {
    state.currentProperties = propertiesMapper(properties);
  }
};
