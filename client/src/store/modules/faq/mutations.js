import * as mutations from './types/mutations';
import { questionMapper, questionsMapper } from './normalizer';
import loading from '@/store/mixins/loading';

export default {
  [mutations.SET_LOADING]: loading.mutations.setLoading,
  [mutations.SET_CURRENT_QUESTIONS]: (state, questions) => {
    state.currentQuestions = questionsMapper(questions);
  },
  [mutations.SET_CURRENT_QUESTION]: (state, question) => {
    state.currentQuestion = questionMapper(question);
  }
};
