import * as actions from './types/actions';
import * as mutations from './types/mutations';
import chatService from '@/services/chat-service/chatService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_CHATS]: async ({ commit, dispatch }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const chats = await chatService.getChatsByCurrentUser();

      commit(mutations.SET_CHATS, chats);
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
  [actions.ADD_CHAT]: async ({ commit, dispatch }, data) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const chat = await chatService.addChat(data);

      commit(mutations.ADD_CHAT, chat);
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
  [actions.GET_CHAT]: async ({ commit, dispatch }, chatId) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const chat = await chatService.getChat(chatId);

      commit(mutations.SET_CHAT, chat);
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
  [actions.GET_CHAT_BY_USER_ID]: async ({ dispatch, commit }, userId) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const chat = await chatService.getChatByUserId(userId);

      commit(mutations.SET_CHAT, chat);
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
