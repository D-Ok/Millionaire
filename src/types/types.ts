import React from 'react';

type SyntheticFunc = (event: React.SyntheticEvent) => void
type EndGameFunc = (score: string, isWon: boolean) => void
type OnEndAct = (isSuccessful: boolean) => void

export type { SyntheticFunc, EndGameFunc, OnEndAct };
