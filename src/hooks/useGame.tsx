import React, { createContext, useContext } from 'react';
import { GameContext } from '../store/GameProvider';

export default function useGame() {
  const value = useContext(GameContext);
  return value;
}
