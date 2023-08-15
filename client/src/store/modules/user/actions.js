import * as actions from './types/actions';
import * as mutations from './types/mutations';
import UserService from '@/services/user-service/UserService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_SUCCESS_NOTIFICATION} from "../notification/types/actions";
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_USERS]: async ({ commit, dispatch }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const users = await UserService.getAllUsers();
      commit(mutations.SET_USERS, users);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_USER]: async ({ commit, dispatch }, userId) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const user = await UserService.getUserById(userId);
      commit(mutations.SET_USER, user);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.CHANGE_USER_PASSWORD]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await UserService.changePassword(data);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
          'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
          error,
          { root: true }
      );
    }
  },
  [actions.CHANGE_USER_AVATAR]: async ({ commit, dispatch }, image) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const formData = new FormData();
      formData.append('image', image, image.name);
      await UserService.changeAvatar(formData);
      commit(SET_LOADING, false, { root: true });
      dispatch(
          'notification/' + notificationActions.SET_SUCCESS_NOTIFICATION,
          'Avatar successfully changed',
          { root: true }
      );
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
          'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
          error,
          { root: true }
      );
    }
  },
  [actions.CHANGE_USER_DATA]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await UserService.changeUserData(data);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.ADMIN_RESET_USER_PASSWORD]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await UserService.adminResetUserPassword(data);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },

  [actions.BIND_EMAIL]: async ({ commit, dispatch }, email) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await UserService.bindEmail(email);
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
