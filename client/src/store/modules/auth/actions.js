import * as actions from './types/actions';
import * as mutations from './types/mutations';
import * as notificationActions from '@/store/modules/notification/types/actions';
import AuthService from '@/services/auth/AuthService';
import { SET_LOADING } from "../../mutationTypes";

export default {
  [actions.REGISTER_USER]: async ({ commit, dispatch }, registerData) => {
    try {
      return await AuthService.registerUser(registerData);
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
      return false;
    }
  },
  [actions.VERIFIED_EMAIL]: async ({ commit, dispatch }, verifiedEmailData) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await AuthService.verifiedEmail(verifiedEmailData);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
      return false;
    }
  },
  [actions.SIGN_IN]: async ({ commit, dispatch }, loginData) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await AuthService.signIn(loginData);
      commit(SET_LOADING, false, { root: true });
    } catch (error) {
      commit(SET_LOADING, false, { root: true });
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
      return false;
    }
  },
  [actions.FETCH_LOGGED_USER]: async ({ commit, dispatch }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const fetchUserResponse = await AuthService.fetchLoggedUser();
      commit(mutations.SET_LOGGED_USER, fetchUserResponse);
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
  [actions.SIGN_OUT]: async ({ commit, dispatch }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await AuthService.signOut();
      commit(mutations.USER_LOGOUT);
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

  [actions.FORGOT_PASSWORD]: async ({ commit, dispatch }, forgotPasswordData) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await AuthService.forgotPassword(forgotPasswordData);
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

  [actions.RESET_PASSWORD]: async ({ commit, dispatch }, resetPasswordData) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await AuthService.resetPassword(resetPasswordData);
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
  [actions.CHANGE_EMAIL]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const user = await AuthService.changeEmail(data);
      commit(mutations.SET_LOGGED_USER, user);
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
  [actions.TOGGLE_CURRENT_USER_EMAIL_NOTIFICATION]: async ({
    commit,
    dispatch
  }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const user = await AuthService.toggleCurrentUserEmailNotification();
      commit(mutations.SET_LOGGED_USER, user);
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
  [actions.SIGN_IN_BY_PROVIDER]: async ({ commit, dispatch }, provider) => {
    try {
      window.location.href = await AuthService.signInByProvider(provider);
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.PROVIDER_CALLBACK]: async ({ commit, dispatch }, loginData) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await AuthService.signInByProviderCallback(loginData.provider, loginData);
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
