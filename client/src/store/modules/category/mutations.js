import * as mutations from './types/mutations';
import { categoriesMapper } from './normalizer';
import loading from '@/store/mixins/loading';

export default {
  [mutations.SET_LOADING]: loading.mutations.setLoading,
  [mutations.SET_CURRENT_CATEGORY]: (state, currentCategory) => {
    state.currentCategory = currentCategory;
  },
  [mutations.SET_CATEGORIES]: (state, categories) => {
    state.categories = categoriesMapper(categories);
  },
  [mutations.SET_CATEGORIES_WITH_PRODUCTS_FOR_USER]: (state, categories) => {
    state.categoriesWithProducts = categoriesMapper(categories);
  }
};
