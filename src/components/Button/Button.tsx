import React, { FC } from 'react';

import { SyntheticFunc } from '../../types/types';
import FUNCTIONS from '../../constants';

const defaultProps = {
  onClick: FUNCTIONS.SYNTHETIC,
  label: '',
  className: '',
};

interface ButtonProps {
    className?: string,
    onClick?: SyntheticFunc,
    label?: string,
}

const Button: FC<ButtonProps> = ({ onClick, label, className }) => {
  const classes = `button ${className}`;
  return (
    <button className={classes} onClick={onClick} type="button">
      {label}
    </button>
  );
};

Button.defaultProps = defaultProps;
export default Button;
