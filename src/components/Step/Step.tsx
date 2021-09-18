import React, { FC } from 'react';

import { PrizeTypes } from '../../types/enums';

const defaultProps = {
  text: '1000',
  type: PrizeTypes.Next,
};

interface StepProps {
    text?: string,
    type?: PrizeTypes
}

const Step : FC<StepProps> = ({ text, type }) => (
  <div className={`step-container line-container step-type-${type}`}>
    <div className="image-base step">
      {text}
    </div>
  </div>
);

Step.defaultProps = defaultProps;

export default Step;
