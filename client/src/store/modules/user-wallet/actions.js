import * as actions from './types/actions';
import * as mutations from './types/mutations';
import UserWalletService from '@/services/user-wallet-service/UserWalletService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_USER_WALLETS_BY_WALLET_TYPE_ID]: async (
    { commit, dispatch },
    walletTypeId
  ) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const userWallets = await UserWalletService.getUserWalletsByWalletTypeId(
        walletTypeId
      );
      commit(mutations.SET_USER_WALLETS_BY_WALLET_TYPE_ID, userWallets);
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
  [actions.GET_USER_WALLETS]: async ({ commit, dispatch }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const userWallets = await UserWalletService.getUserWalletsForUser();
      commit(mutations.SET_USER_WALLETS, userWallets);
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
  [actions.ADD_USER_WALLET]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const userWallet = await UserWalletService.addUserWallet(data);
      commit(mutations.ADD_USER_WALLET, userWallet);
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
  [actions.UPDATE_USER_WALLET]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const userWallet = await UserWalletService.updateUserWallet(data);
      commit(mutations.UPDATE_USER_WALLET, userWallet);
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
  [actions.DELETE_USER_WALLET]: async ({ commit, dispatch }, userWalletId) => {
    try {
      commit(SET_LOADING, true, { root: true });
      await UserWalletService.deleteUserWallet(userWalletId);
      commit(mutations.DELETE_USER_WALLET, userWalletId);
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
