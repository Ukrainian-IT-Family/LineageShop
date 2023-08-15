import * as actions from './types/actions';
import * as mutations from './types/mutations';
import WalletTypeService from '@/services/wallet-type-service/WalletTypeService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_WALLET_TYPES]: async ({ commit, dispatch }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const walletTypes = await WalletTypeService.getWalletTypes();
      commit(mutations.SET_WALLET_TYPES, walletTypes);
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
