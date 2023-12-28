import { FC, useContext, useEffect, useState } from 'react';
import { GameContext } from 'src/context/GameContext';
import { ICoordinates, PlayerId } from 'src/styles/types/Game';
import {
  getBallIncrements,
  getBallInitialPosition,
  paddleHitBall,
} from 'src/utils/ballUtils';
import { ballSize, paddleSize } from 'src/utils/settings';

const initialPosition = getBallInitialPosition();
const initialIncrements = getBallIncrements();

export const Ball: FC = () => {
  const [position, setPosition] = useState<ICoordinates>(initialPosition);
  const [increments, setIncrements] = useState(initialIncrements);
  const [movingLeft, setMovingLeft] = useState(!!Math.round(Math.random()));
  const [movingUp, setMovingUp] = useState(!!Math.round(Math.random()));

  const { play, resetBall, handlePlayerScored } = useContext(GameContext);
  const p1y = useContext(GameContext).p1.y;
  const p2y = useContext(GameContext).p2.y;

  useEffect(() => {
    if (resetBall) {
      setPosition(getBallInitialPosition());
      setIncrements(getBallIncrements());
      setMovingLeft(!!Math.round(Math.random()));
      setMovingUp(!!Math.round(Math.random()));
    }
  }, [resetBall]);

  // Set Ball Size
  useEffect(() => {
    const ball = document.getElementById('ball') as HTMLDivElement;
    ball.style.setProperty('height', `${ballSize}px`);
    ball.style.setProperty('width', `${ballSize}px`);
  }, []);

  // Controll Bounce
  useEffect(() => {
    if (play) {
      const headerHeight = 50;
      const maxLeft = document.body.clientWidth - ballSize - 30;
      const maxTop = document.body.clientHeight - headerHeight - ballSize;

      const handlePaddleHit = (player: PlayerId) => {
        // Ball contact location on the paddle
        const hitY =
          (position.y - (player === 'p1' ? p1y : p2y) + ballSize / 2) / (paddleSize / 2);
        setIncrements(getBallIncrements(hitY));
        setMovingUp(hitY < 1);
      };

      // Bounce horizontal
      if (position.x <= 30 && movingLeft) {
        setMovingLeft(false);
        paddleHitBall(p1y, position.y) ? handlePaddleHit('p1') : handlePlayerScored('p2');
      } else if (position.x >= maxLeft && !movingLeft) {
        setMovingLeft(true);
        paddleHitBall(p2y, position.y) ? handlePaddleHit('p2') : handlePlayerScored('p1');
      }

      // Bounce vertical
      if (position.y < 0) {
        setMovingUp(false);
      } else if (position.y >= maxTop) {
        setMovingUp(true);
      }
    }
  }, [play, position, p1y, p2y, movingLeft, handlePlayerScored]);

  // Controll Movement
  useEffect(() => {
    let intervalId: number;
    if (play) {
      const movementRate = 10;

      const move = () => {
        setPosition(e => {
          const top = movingUp ? e.y - increments.y : e.y + increments.y;
          const left = movingLeft ? e.x - increments.x : e.x + increments.x;
          return { y: top, x: left };
        });
      };
      intervalId = setInterval(move, movementRate);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [movingLeft, movingUp, increments, play]);

  return <div id="ball" className="ball" style={{ top: position.y, left: position.x }} />;
};
