import * as actions from './types/actions';
import * as mutations from './types/mutations';
import CategoryService from '@/services/category-service/CategoryService';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  [actions.GET_CURRENT_CATEGORY]: async ({ commit, dispatch }, id) => {
    try {
      commit(mutations.SET_LOADING, true);
      const currentCategory = await CategoryService.getCategoryById(id);
      commit(mutations.SET_CURRENT_CATEGORY, currentCategory);
      commit(mutations.SET_LOADING, false);
    } catch (error) {
      commit(mutations.SET_LOADING, false);
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },

  [actions.GET_CATEGORIES]: async ({ commit, dispatch }) => {
    try {
      commit(mutations.SET_LOADING, true);
      const categories = await CategoryService.getCategories();
      commit(mutations.SET_CATEGORIES, categories);
      commit(mutations.SET_LOADING, false);
    } catch (error) {
      commit(mutations.SET_LOADING, false);
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },

  [actions.GET_CATEGORIES_WITH_PRODUCTS_FOR_USER]: async (
    { commit, dispatch },
    userId = null
  ) => {
    try {
      commit(mutations.SET_LOADING, true);
      const categories = await CategoryService.getCategoriesWithProductsForUser(
        userId
      );
      commit(mutations.SET_CATEGORIES_WITH_PRODUCTS_FOR_USER, categories);
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
