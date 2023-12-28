import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerId, Score } from 'src/styles/types/Game';
import { gameTo } from 'src/utils/settings';
import { lsGet } from 'src/utils/localStorageUtils';

interface IGameContext {
  score: Score;
  setScore: Dispatch<SetStateAction<Score>>;
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
  resetBall: number;
  handlePlayerScored: (pId: PlayerId) => void;
}

export const GameContext = createContext<IGameContext>({
  score: { p1: 0, p2: 0 },
  setScore: () => {},
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
  resetBall: 0,
  handlePlayerScored: () => {},
});

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState<Score>({ p1: 0, p2: 0 });
  const [startGame, setStartGame] = useState(true);
  const [play, setPlay] = useState(false);
  const [p1Y, setP1Y] = useState((document.body.clientHeight - 200) / 2);
  const [p2Y, setP2Y] = useState((document.body.clientHeight - 200) / 2);
  const [resetBall, setResetBall] = useState(0);
  const [playerScored, setPlayerScored] = useState<PlayerId | ''>('');
  const [playerWon, setPlayerWon] = useState<PlayerId | ''>('');

  const navigate = useNavigate();

  ///// Handle Keyboard press /////
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (['KeyP', 'Space'].includes(e.code)) {
        // Handle pause
        !playerWon && setPlay(e => !e);
      } else if (e.code === 'Escape') {
        // Handle quit
        navigate('/');
      } else if (e.code === 'KeyR') {
        // Handle reset
        setScore({ p1: 0, p2: 0 });
        setStartGame(true);
        setP1Y((document.body.clientHeight - 200) / 2);
        setP2Y((document.body.clientHeight - 200) / 2);
        setPlayerScored('');
        setPlayerWon('');
        setResetBall(e => e + 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [playerWon, navigate]);
  /////////////////////////////////////

  ///// Handle Alerts /////
  useEffect(() => {
    startGame && play && setStartGame(false);
  }, [startGame, play]);

  useEffect(() => {
    playerScored && play && setPlayerScored('');
    playerWon && play && setPlayerWon('');
  }, [playerScored, playerWon, play]);

  const playerScoredName = playerScored
    ? lsGet(`${playerScored}-name`) || playerScored === 'p1'
      ? 'Player 1'
      : 'Player 2'
    : '';
  /////////////////////////////////////

  const handlePlayerScored = (player: PlayerId) => {
    setPlay(false);
    gameTo === score[player] + 1 && setPlayerWon(player);
    setPlayerScored(player);
    setScore(e => ({ ...e, [player]: e[player] + 1 }));
  };

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        play,
        setPlay,
        p1: { y: p1Y, setY: setP1Y },
        p2: { y: p2Y, setY: setP2Y },
        resetBall,
        handlePlayerScored,
      }}
    >
      {children}
      {/* ALERTS */}
      {!playerWon && !play ? (
        <h3 className="alert pause">{`Press Spacebar to ${
          startGame ? 'start' : 'continue'
        }`}</h3>
      ) : null}
      {playerScored && !playerWon ? (
        <h3 className="alert score-alert">{`${playerScoredName} scored!`}</h3>
      ) : playerScored && playerWon ? (
        <h3 className="alert score-alert">
          {`${playerScoredName} won the game!`}
          <p>Press R to restart game</p>
          <p>Press Esc to quit</p>
        </h3>
      ) : null}
    </GameContext.Provider>
  );
};
