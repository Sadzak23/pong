import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

interface IGameContext {
  play: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;
  p1: {
    y: number;
    setY: Dispatch<SetStateAction<number>>;
  };
  p2: {
    y: number;
    setY: Dispatch<SetStateAction<number>>;
  };
}

export const GameContext = createContext<IGameContext>({
  play: false,
  setPlay: () => {},
  p1: {
    y: (document.body.clientHeight - 200) / 2,
    setY: () => {},
  },
  p2: {
    y: (document.body.clientHeight - 200) / 2,
    setY: () => {},
  },
});

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [play, setPlay] = useState(true);
  const [p1Y, setP1Y] = useState((document.body.clientHeight - 200) / 2);
  const [p2Y, setP2Y] = useState((document.body.clientHeight - 200) / 2);

  useEffect(() => {
    const handlePause = (e: KeyboardEvent) => {
      if (['KeyP', 'Space'].includes(e.code)) {
        setPlay(e => !e);
      }
    };
    window.addEventListener('keydown', handlePause);
    return () => {
      window.removeEventListener('keydown', handlePause);
    };
  }, []);

  return (
    <GameContext.Provider
      value={{
        play,
        setPlay,
        p1: { y: p1Y, setY: setP1Y },
        p2: { y: p2Y, setY: setP2Y },
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
