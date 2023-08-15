import * as actions from './types/actions';
import * as mutations from './types/mutations';
import MessageService from '@/services/message-service/MessageService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.ADD_MESSAGE]: async ({ commit, dispatch }, data) => {
    try {
      await MessageService.addMessage(data);
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_MESSAGES_BY_CHAT_ID]: async ({ commit, dispatch }, chatId) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const messages = await MessageService.getMessagesByChatId(chatId);

      commit(mutations.SET_MESSAGES, messages);
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
