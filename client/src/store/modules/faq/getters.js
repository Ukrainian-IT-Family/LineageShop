import * as getters from './types/getters';

export default {
  [getters.GET_CURRENT_QUESTIONS]: state => state.currentQuestions,
  [getters.GET_CURRENT_QUESTION]: state => state.currentQuestion
};
