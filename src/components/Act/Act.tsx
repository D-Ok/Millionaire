import React, { FC, useEffect, useState } from 'react';

import { IActResult, IOption } from '../../types/interfases';
import { getLetter, getOptionType, sleep } from './utils';
import { OnEndAct } from '../../types/types';
import FUNCTIONS from '../../constants';
import Option from '../Option/Option';

const defaultProps = {
  question: '',
  options: [],
  correct: [],
  onEndAct: FUNCTIONS.END_ACT,
  waitResults: 1000,
  waitSelected: 1500,
};

interface ActProp {
    question?: string,
    options?: IOption[],
    correct?: string[],
    onEndAct?: OnEndAct,
    waitSelected?: number,
    waitResults?: number
}

const Act: FC<ActProp> = ({
  question, options, correct, onEndAct,
  waitResults, waitSelected,
}) => {
  const [selected, setSelected] = useState<Array<string>>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [results, setResults] = useState<IActResult>({ correct: [], wrong: [] });

  async function setResult(): Promise<void> {
    setIsDisabled(true);
    await sleep(waitSelected || defaultProps.waitSelected);
    setResults({
      correct: correct || [],
      wrong: selected.filter((s) => !correct?.includes(s)),
    });
  }

  async function showResults(): Promise<void> {
    await sleep(waitResults || defaultProps.waitResults);
    if (onEndAct) onEndAct(!results.wrong.length);
  }

  useEffect(() => {
    if (selected.length === correct?.length) setResult();
  }, [selected, correct, waitSelected]);

  useEffect(() => {
    if (results.correct.length) showResults();
  }, [results, waitResults]);

  const onOptionClick = (optionId: string): void => {
    setSelected((prev) => [...prev, optionId]);
  };

  return (
    <div className="act-container">
      <p className="game-label">{question}</p>
      <div className="options-container">
        {options && options.map((option: IOption, index) => (
          <Option
            key={option.id}
            disabled={isDisabled}
            item={{ id: getLetter(index), text: option.text }}
            type={getOptionType(option.id, selected, results)}
            onClick={() => onOptionClick(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

Act.defaultProps = defaultProps;
export default Act;
