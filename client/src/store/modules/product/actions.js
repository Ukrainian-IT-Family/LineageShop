import * as actions from './types/actions';
import * as mutations from './types/mutations';
import ProductService from '@/services/product-service/ProductService';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  [actions.GET_PRODUCT]: async ({ commit, dispatch }, id) => {
    try {
      commit(mutations.SET_LOADING, true);
      const product = await ProductService.getProductById(id);
      commit(mutations.SET_PRODUCT, product);
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
  [actions.GET_PRODUCTS]: async ({ commit, dispatch }, data) => {
    try {
      commit(mutations.SET_LOADING, true);
      const products = await ProductService.getProducts(data);
      commit(mutations.SET_PRODUCTS, products);
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
  [actions.GET_PRODUCTS_FOR_USER]: async ({ commit, dispatch }, data) => {
    try {
      commit(mutations.SET_LOADING, true);
      const products = await ProductService.getProductsForUser(data);
      commit(mutations.SET_PRODUCTS_FOR_USER, products);
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
  [actions.ADD_PRODUCT]: async ({ commit, dispatch }, data) => {
    try {
      commit(mutations.SET_LOADING, true);
      const newProduct = {
        active: data.active,
        raceId: data.race ? data.race : null,
        equipmentId: data.equipment ? data.equipment : null,
        level: data.level ? data.level : null,
        profession: data.profession ? data.profession : null,
        rankId: data.rank ? data.rank : null,
        typeId: data.type ? data.type : null,
        propertyId: data.property ? data.property : null,
        name: data.title ? data.title : null,
        shortDescription: data.shortDescription ? data.shortDescription : null,
        description: data.description ? data.description : null,
        price: data.price ? data.price : null,
        availability: data.availability ? data.availability : null,
        subPropertyId: data.subProperty ? data.subProperty : null,
        categoryId: data.categoryId ? data.categoryId : null
      };
      const product = await ProductService.addProduct(newProduct);
      commit(mutations.ADD_PRODUCT, product);
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
  [actions.UPDATE_PRODUCT]: async ({ commit, dispatch }, data) => {
    try {
      commit(mutations.SET_LOADING, true);
      const updatedProduct = {
        id: data.id,
        active: data.active,
        raceId: data.race ? data.race : null,
        equipmentId: data.equipment ? data.equipment : null,
        level: data.level ? data.level : null,
        profession: data.profession ? data.profession : null,
        rankId: data.rank ? data.rank : null,
        typeId: data.type ? data.type : null,
        propertyId: data.property ? data.property : null,
        name: data.title ? data.title : null,
        shortDescription: data.shortDescription ? data.shortDescription : null,
        description: data.description ? data.description : null,
        price: data.price ? data.price : null,
        availability: data.availability ? data.availability : null,
        subPropertyId: data.subProperty ? data.subProperty : null,
        categoryId: data.categoryId ? data.categoryId : null
      };
      const product = await ProductService.updateProduct(
        data.id,
        updatedProduct
      );
      commit(mutations.UPDATE_PRODUCT, product);
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
  [actions.DELETE_PRODUCT]: async ({ commit, dispatch }, id) => {
    try {
      commit(mutations.SET_LOADING, true);
      const product = await ProductService.deleteProduct(id);
      commit(mutations.DELETE_PRODUCT, id);
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
