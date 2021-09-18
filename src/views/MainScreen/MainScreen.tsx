import React, { FC } from 'react';
import FUNCTIONS from '../../constants';
import Button from '../../components/Button/Button';
import { SyntheticFunc } from '../../types/types';

const defaultProps = {
  label: '',
  text: '',
  buttonLabel: '',
  onButtonClick: FUNCTIONS.SYNTHETIC,
  addBackground: false,
};

interface MainScreenProp {
    label?: string,
    text?: string,
    buttonLabel?: string,
    onButtonClick?: SyntheticFunc,
    addBackground?: boolean
}

const MainScreen: FC<MainScreenProp> = ({
  label, text, buttonLabel, onButtonClick, addBackground,
}) => {
  const classes = `main-screen ${addBackground ? 'add-background' : ''}`;
  return (
    <div className={classes}>
      <div className="main-image-container" />
      <div className="main-text-container">
        <p className="game-label">{label}</p>
        <p className="game-header">{text}</p>
        <Button className="game-button" label={buttonLabel} onClick={onButtonClick} />
      </div>
    </div>
  );
};

MainScreen.defaultProps = defaultProps;
export default MainScreen;
