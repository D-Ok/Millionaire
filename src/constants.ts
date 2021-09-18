import { SyntheticFunc, EndGameFunc, OnEndAct } from './types/types';

const defaultSynthetic : SyntheticFunc = () => undefined;
const defaultEndGame : EndGameFunc = () => undefined;
const defaultEndAct : OnEndAct = () => undefined;

type FuncType = {
    SYNTHETIC: SyntheticFunc,
    END_GAME: EndGameFunc,
    END_ACT: OnEndAct
};

const FUNCTIONS: FuncType = {
  SYNTHETIC: defaultSynthetic,
  END_GAME: defaultEndGame,
  END_ACT: defaultEndAct,
};

export default FUNCTIONS;
