import React, { ReactNode, createContext, useState, useEffect } from 'react';
import Player from 'types/Player';
import { getData, setData } from '../data/storage';

type GameProviderProps = {
  children: ReactNode;
};

type GameContextTypes = {
  players: Player[];
  setPlayer: React.Dispatch<React.SetStateAction<Players>>;
  user: { id: number; name: string; src: string };
  setUser: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      src: string;
    }>
  >;
  loading: boolean;
  dialogUser: Player;
  setDialogUser: React.Dispatch<React.SetStateAction<Player>>;
};

type Players = [] | Player[];

const STORAGE_PLAYERS = '@storage_hamlet_players';

export const GameContext = createContext({} as GameContextTypes);

const INITIAL_USER = { id: 0, name: '', src: '' } as Player;

export default function GameProvider({ children }: GameProviderProps) {
  const [players, setPlayer] = useState<Players>([]);
  const [user, setUser] = useState({ id: 0, name: '', src: '' });
  const [dialogUser, setDialogUser] = useState(INITIAL_USER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mountStorage = async () => {
      setLoading(true);

      const dataPlayers: Player[] | null = await getData(STORAGE_PLAYERS);

      if (dataPlayers && Array.isArray(dataPlayers)) setPlayer(dataPlayers);

      setLoading(false);
    };

    mountStorage();
  }, []);

  useEffect(() => {
    const setPlayers = async () => {
      setLoading(true);

      await setData(STORAGE_PLAYERS, players);

      setLoading(false);
    };

    setPlayers();
  }, [players]);

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayer,
        user,
        setUser,
        loading,
        dialogUser,
        setDialogUser,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
