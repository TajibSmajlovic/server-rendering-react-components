export function handleModifyAnswerVotes(answers, answerId, value) {
  return answers.map((answer) =>
    answer.answerId !== answerId
      ? answer
      : { ...answer, upvotes: answer.upvotes + value }
  );
}
