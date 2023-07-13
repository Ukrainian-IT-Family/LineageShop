import requestService from '@/services/request-service/ApiRequestService';

const questionService = {
  async getCurrentQuestions() {
    const response = await requestService.get('/questions');

    return response?.data?.data;
  },
  async getCurrentQuestion(slug) {
    const response = await requestService.get('/questions/' + slug);

    return response?.data?.data;
  }
};

export default questionService;
