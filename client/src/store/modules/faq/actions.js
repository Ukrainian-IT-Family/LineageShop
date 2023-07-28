import * as actions from './types/actions';
import * as mutations from './types/mutations';
import QuestionService from '@/services/question-service/QuestionService';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  [actions.GET_CURRENT_QUESTIONS]: async ({ commit, dispatch }) => {
    try {
      commit(mutations.SET_LOADING, true);
      const currentQuestions = await QuestionService.getCurrentQuestions();
      commit(mutations.SET_CURRENT_QUESTIONS, currentQuestions);
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
  [actions.GET_CURRENT_QUESTION]: async ({ commit, dispatch }, slug) => {
    try {
      commit(mutations.SET_LOADING, true);
      const currentQuestion = await QuestionService.getCurrentQuestion(slug);
      commit(mutations.SET_CURRENT_QUESTION, currentQuestion);
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
