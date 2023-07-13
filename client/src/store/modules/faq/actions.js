import * as actions from './types/actions';
import * as mutations from './types/mutations';
import QuestionService from '@/services/question-service/QuestionService';
import * as notificationActions from '@/store/modules/notification/types/actions';

export default {
  [actions.GET_CURRENT_QUESTIONS]: async ({ commit, dispatch }) => {
    try {
      const currentQuestions = await QuestionService.getCurrentQuestions();
      commit(mutations.SET_CURRENT_QUESTIONS, currentQuestions);
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  },
  [actions.GET_CURRENT_QUESTION]: async ({ commit, dispatch }, slug) => {
    try {
      const currentQuestion = await QuestionService.getCurrentQuestion(slug);
      commit(mutations.SET_CURRENT_QUESTION, currentQuestion);
    } catch (error) {
      dispatch(
        'notification/' + notificationActions.SET_ERROR_NOTIFICATION,
        error,
        { root: true }
      );
    }
  }
};
