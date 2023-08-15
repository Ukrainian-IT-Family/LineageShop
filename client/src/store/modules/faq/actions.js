import * as actions from './types/actions';
import * as mutations from './types/mutations';
import QuestionService from '@/services/question-service/QuestionService';
import * as notificationActions from '@/store/modules/notification/types/actions';
import {SET_LOADING} from "../../mutationTypes";

export default {
  [actions.GET_CURRENT_QUESTIONS]: async ({ commit, dispatch }) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const currentQuestions = await QuestionService.getCurrentQuestions();
      commit(mutations.SET_CURRENT_QUESTIONS, currentQuestions);
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
  [actions.GET_CURRENT_QUESTION]: async ({ commit, dispatch }, slug) => {
    try {
      commit(SET_LOADING, true, { root: true });
      const currentQuestion = await QuestionService.getCurrentQuestion(slug);
      commit(mutations.SET_CURRENT_QUESTION, currentQuestion);
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
