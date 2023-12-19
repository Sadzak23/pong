import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GameContext } from './GameContext';
import { PlayerId } from 'src/styles/types/Game';
import { lsGet } from 'src/utils/localStorageUtils';

interface IAlertContext {
  setStartGame: Dispatch<SetStateAction<boolean>>;
  setPause: Dispatch<SetStateAction<boolean>>;
  setPlayerScored: Dispatch<SetStateAction<PlayerId | ''>>;
}

export const AlertContext = createContext<IAlertContext>({
  setStartGame: () => {},
  setPause: () => {},
  setPlayerScored: () => {},
});

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [startGame, setStartGame] = useState(true);
  const [pause, setPause] = useState(false);
  const [playerScored, setPlayerScored] = useState<PlayerId | ''>('');

  const { play } = useContext(GameContext);

  useEffect(() => {
    startGame && play ? setStartGame(false) : setPause(!play);
  }, [startGame, play]);

  useEffect(() => {
    playerScored && play && setPlayerScored('');
  }, [playerScored, play]);

  return (
    <AlertContext.Provider
      value={{
        setStartGame,
        setPause,
        setPlayerScored,
      }}
    >
      {children}
      {pause ? (
        <h3 className="alert pause">{`Press Spacebar to ${
          startGame ? 'start' : 'continue'
        }`}</h3>
      ) : null}
      {playerScored ? (
        <h3 className="alert score">{`${lsGet(`${playerScored}-name`)} scored!`}</h3>
      ) : null}
    </AlertContext.Provider>
  );
};
