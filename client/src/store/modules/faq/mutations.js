import * as mutations from './types/mutations';
import { questionMapper, questionsMapper } from './normalizer';

export default {
  [mutations.SET_CURRENT_QUESTIONS]: (state, questions) => {
    state.currentQuestions = questionsMapper(questions);
  },
  [mutations.SET_CURRENT_QUESTION]: (state, question) => {
    state.currentQuestion = questionMapper(question);
  }
};
