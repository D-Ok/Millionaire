import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { ResizeObserver } from 'resize-observer';

import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import Act from '../../components/Act/Act';

import { getRandomQuestion, getStringScore, parseQuestions } from './utils';
import { IQuestion, IScore } from '../../types/interfases';
import { EndGameFunc } from '../../types/types';
import FUNCTIONS from '../../constants';

const defaultProps = {
  currency: '$',
  questions: [],
  onEndGame: FUNCTIONS.END_GAME,
};

interface GameScreenProp {
    currency?: string,
    questions?: IQuestion[],
    onEndGame?: EndGameFunc
}

const GameScreen: FC<GameScreenProp> = ({ questions, onEndGame, currency }) => {
  const [steps, setSteps] = useState<Array<IScore>>([]);
  const [score, setScore] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isScoreView, setIsScoreView] = useState(false);
  const [question, setQuestion] = useState<IQuestion | undefined>();

  const listener = (entries: any) => {
    if (entries && entries[0]) {
      const mobile = entries[0].contentRect.width < 900;

      if (isMobile !== mobile) {
        setIsScoreView(!mobile);
        setIsMobile(mobile);
      }
    }
  };

  useEffect(() => {
    if (questions) {
      const scores = parseQuestions(questions);
      const currentScore = scores[0];

      setSteps(scores);
      setScore(currentScore ? currentScore.score : 0);
    }
  }, [questions]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(listener);
    resizeObserver.observe(document.documentElement);
    return () => resizeObserver.unobserve(document.documentElement);
  }, [isMobile]);

  useEffect(() => {
    const curStep = steps.find((s) => s.score === score);
    const randomQuestion = curStep
      ? getRandomQuestion(curStep.questions, questions || [])
      : undefined;

    setQuestion(randomQuestion);
  }, [score, questions]);

  const onEndAct = useCallback((isSuccessful: boolean) => {
    const currentIndex = steps.findIndex((s) => s.score === score);
    const nextScore = steps[currentIndex + 1];
    const strScore = getStringScore(score);

    const prevScore = steps[currentIndex - 1];
    const strPrevScore = getStringScore(prevScore ? prevScore.score : 0);

    switch (true as boolean) {
      case (isSuccessful && !nextScore):
        if (onEndGame) onEndGame(strScore, true);
        break;
      case isSuccessful:
        setScore(nextScore.score);
        break;
      default:
        if (onEndGame) onEndGame(strPrevScore, false);
        break;
    }
  }, [steps, score, onEndGame]);

  const renderAct = () => question && (
    <Act
      question={question.question}
      key={question.key}
      options={question.options}
      correct={question.correct}
      onEndAct={(s) => onEndAct(s)}
    />
  );

  const renderScore = () => (
    <ScoreBoard
      currency={currency}
      currentStep={score}
      steps={(steps.map((el) => el.score))}
    />
  );

  return (
    <div className="game-container">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        className={`mobile-buttons image-${isScoreView ? 'close' : 'menu'}`}
        onClick={() => setIsScoreView(!isScoreView)}
        type="button"
      />
      { (!isMobile || !isScoreView) && renderAct() }
      { (!isMobile || isScoreView) && renderScore() }
    </div>
  );
};

GameScreen.defaultProps = defaultProps;
export default GameScreen;
