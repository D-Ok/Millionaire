import { IQuestion, IScore } from '../../types/interfases';

export const getStringScore = (s: number) : string => s.toLocaleString();

const scoreSort = (a: IScore, b: IScore): number => a.score - b.score;

export function parseQuestions(questions: Array<IQuestion>): Array<IScore> {
  if (!questions) return [];
  const steps = new Array<IScore>();
  let contains;

  questions.forEach((q) => {
    contains = steps.find((s) => s.score === q.score);
    if (contains) {
      contains.questions.push(q.key);
    } else {
      steps.push({ score: q.score, questions: [q.key] });
    }
  });
  steps.sort(scoreSort);
  return steps;
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function getRandomQuestion(
  questionIds: Array<string>, questions: Array<IQuestion>,
): IQuestion | undefined {
  const scoreQuestionsLength = questionIds.length;
  const random = questionIds[getRandomInt(scoreQuestionsLength)];

  const randomQuestion = questions.find((q) => q.key === random);
  return randomQuestion;
}
