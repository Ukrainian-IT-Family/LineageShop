export const questionsMapper = function(questions) {
  let result = [];

  result = {
    ...result,
    ...questions.reduce(
      (prev, question) => ({
        ...prev,
        [question.id]: questionMapper(question)
      }),
      {}
    )
  };

  return result;
};

export const questionMapper = question => ({
  id: question.id,
  title: question.title,
  description: question.description,
  sort: question.sort,
  slug: question.slug,
  created: question.created
});
