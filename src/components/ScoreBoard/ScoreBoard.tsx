import React, { FC } from 'react';

import { getStringScore } from '../../views/GameScreen/utils';
import { PrizeTypes } from '../../types/enums';
import Step from '../Step/Step';

const defaultProps = {
  steps: [],
  currentStep: 0,
  currency: '$',
};

interface ScoreBoardProp {
    steps?: Array<number>,
    currentStep?: number,
    currency?: string
}

function getStepType(current: number, selected: number | undefined): PrizeTypes {
  switch (true) {
    case current === selected:
      return PrizeTypes.Current;
    case selected && current > selected:
      return PrizeTypes.Next;
    default:
      return PrizeTypes.Previous;
  }
}

const ScoreBoard: FC<ScoreBoardProp> = ({ steps, currentStep, currency }) => (
  <div className="score-container">
    {steps && steps.map((s) => {
      const currentType = getStepType(s, currentStep);
      const numberStr = getStringScore(s);
      return <Step text={`${currency}${numberStr}`} type={currentType} key={numberStr} />;
    })}
  </div>
);

ScoreBoard.defaultProps = defaultProps;
export default ScoreBoard;
