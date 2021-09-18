import * as React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import configData from './config.json';

import MainScreen from './views/MainScreen/MainScreen';
import GameScreen from './views/GameScreen/GameScreen';
import { IApp } from './types/interfases';
import { SCREENS } from './types/enums';

const defaultAppConfig = { name: 'Millionaire', currency: '$', questions: [] };
const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.START);
  const [appInfo, setAppInfo] = useState<IApp>(defaultAppConfig);
  const [totalScore, setTotalScore] = useState('0');

  useEffect(() => {
    setAppInfo(configData);
  }, []);

  function endGame(score: string): void {
    setTotalScore(score);
    setCurrentScreen(SCREENS.END);
  }

  const renderScreen = (): React.ReactElement => {
    if (appInfo === null) return <> </>;

    switch (currentScreen) {
      case SCREENS.START:
        return (
          <MainScreen
            text={appInfo.name}
            buttonLabel="Start"
            onButtonClick={() => setCurrentScreen(SCREENS.GAME)}
            addBackground
          />
        );
      case SCREENS.GAME:
        return <GameScreen questions={appInfo.questions} onEndGame={(s) => endGame(s)} />;
      default:
        return (
          <MainScreen
            label="Total score: "
            text={`${appInfo.currency}${totalScore} earned`}
            buttonLabel="Try again"
            onButtonClick={() => setCurrentScreen(SCREENS.START)}
          />
        );
    }
  };

  return <div className="App">{renderScreen()}</div>;
};

export default App;
