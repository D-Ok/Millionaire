import React, { FC } from 'react';

import { SyntheticFunc } from '../../types/types';
import { IOption } from '../../types/interfases';
import { OptionTypes } from '../../types/enums';
import FUNCTIONS from '../../constants';

const defaultItem: IOption = { id: 'H', text: 'Hello' };
const defaultProps = {
  onClick: FUNCTIONS.SYNTHETIC,
  item: defaultItem,
  type: OptionTypes.Default,
  disabled: false,
};

interface OptionProps {
    item?: IOption,
    type?: OptionTypes,
    onClick?: SyntheticFunc,
    disabled?: boolean
}

const Option : FC<OptionProps> = ({
  item, type, onClick, disabled,
}) => (
  <button
    className={`option-container line-container 
    option-type-${type} 
    ${disabled || type !== OptionTypes.Default ? 'no-hover' : 'can-hover'}
    `}
    onClick={onClick}
    type="button"
    disabled={disabled}
  >
    <div className="option image-base">
      {item && (
      <div className="option-text-container">
        <span className="option-text option-id">{item.id}</span>
        <p className="option-text option-label">{item.text}</p>
      </div>
      )}
    </div>
  </button>
);

Option.defaultProps = defaultProps;

export default Option;
