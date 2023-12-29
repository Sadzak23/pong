import { FC, useContext, useEffect, useState } from 'react';
import { GameContext } from 'src/context/GameContext';
import { PlayerMove } from 'src/styles/types/GameTypes';
import { controls, paddleSpeed } from 'src/utils/settings';

interface Props {
  player: 'p1' | 'p2';
}

export const Paddle: FC<Props> = ({ player }) => {
  const [move, setMove] = useState<PlayerMove>('');
  const [keyUpPressed, setKeyUpPressed] = useState(false);
  const [keyDownPressed, setKeyDownPressed] = useState(false);

  const { play } = useContext(GameContext);
  const y = useContext(GameContext)[player].y;
  const setY = useContext(GameContext)[player].setY;

  useEffect(() => {
    const increment = 10;
    const maxTop = document.body.clientHeight - 200;
    let intervalId: number;

    const moveUp = () => setY(e => (e > increment ? e - increment : 0));
    const moveDown = () => setY(e => (e < maxTop ? e + increment : maxTop));

    if (move === 'up') {
      intervalId = setInterval(moveUp, paddleSpeed);
    } else if (move === 'down') {
      intervalId = setInterval(moveDown, paddleSpeed);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [move, setY]);

  useEffect(() => {
    if (play) {
      const handleMove = (e: KeyboardEvent) => {
        if (e.code === controls[player].up) {
          setMove('up');
          setKeyUpPressed(true);
        } else if (e.code === controls[player].down) {
          setMove('down');
          setKeyDownPressed(true);
        }
      };

      window.addEventListener('keydown', handleMove);
      return () => window.removeEventListener('keydown', handleMove);
    } else {
      setKeyUpPressed(false);
      setKeyDownPressed(false);
      setMove('');
    }
  }, [player, play]);

  useEffect(() => {
    const handleStop = (e: KeyboardEvent) => {
      if (e.code === controls[player].up) {
        setKeyUpPressed(false);
        !keyDownPressed && setMove('');
      } else if (e.code === controls[player].down) {
        setKeyDownPressed(false);
        !keyUpPressed && setMove('');
      }
    };

    window.addEventListener('keyup', handleStop);
    return () => {
      window.removeEventListener('keyup', handleStop);
    };
  }, [player, keyDownPressed, keyUpPressed]);

  return <div className={`paddle ${player}`} style={{ top: y }}></div>;
};
