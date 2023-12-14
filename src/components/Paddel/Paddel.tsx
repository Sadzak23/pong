import { FC, useEffect, useState } from 'react';
import { PlayerMove } from 'src/styles/types/Game';
import { controls, movementSpeed } from 'src/utils/settings';

interface Props {
  player: 'p1' | 'p2';
}

export const Paddel: FC<Props> = ({ player }) => {
  const [top, setTop] = useState((document.body.clientHeight - 200) / 2);
  const [move, setMove] = useState<PlayerMove>('');
  const [keyUpPressed, setKeyUpPressed] = useState(false);
  const [keyDownPressed, setKeyDownPressed] = useState(false);

  useEffect(() => {
    const increment = 10;
    const maxTop = document.body.clientHeight - 200;
    let intervalId: number;

    const moveUp = () => setTop(e => (e > increment ? e - increment : 0));
    const moveDown = () => setTop(e => (e < maxTop ? e + increment : maxTop));

    if (move === 'up') {
      intervalId = setInterval(moveUp, movementSpeed);
    } else if (move === 'down') {
      intervalId = setInterval(moveDown, movementSpeed);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [move]);

  useEffect(() => {
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
  }, [player]);

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

  return <div className={`paddle ${player}`} style={{ top }}></div>;
};
