import { FC, useContext, useEffect, useState } from 'react';
import { GameContext } from 'src/context/GameContext';
import { ICoordinates } from 'src/styles/types/Game';
import {
  getBallIncrements,
  getBallInitialPosition,
  paddelHitBall,
} from 'src/utils/ballUtils';
import { ballSize } from 'src/utils/settings';

export const Ball: FC = () => {
  const [position, setPosition] = useState<ICoordinates>(getBallInitialPosition());
  const [increments, setIncrements] = useState(getBallIncrements());
  const [movingLeft, setMovingLeft] = useState(!!Math.round(Math.random()));
  const [movingUp, setMovingUp] = useState(!!Math.round(Math.random()));

  const { play, setPlay } = useContext(GameContext);
  const p1y = useContext(GameContext).p1.y;
  const p2y = useContext(GameContext).p2.y;

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

      // Bounce horizontal
      if (position.x <= 20 && movingLeft) {
        setMovingLeft(false);
        // Paddel hit
        if (paddelHitBall(p1y, position.y)) {
          setIncrements(getBallIncrements());
        }
        // Paddel miss/Score
        else {
          console.log('p2 score');
          setPlay(false);
        }
      } else if (position.x >= maxLeft && !movingLeft) {
        setMovingLeft(true);
        // Paddel hit
        if (paddelHitBall(p2y, position.y)) {
          setIncrements(getBallIncrements());
        }
        // Paddel miss/Score
        else {
          console.log('p1 score');
          setPlay(false);
        }
      }
      // Bounce vertical
      if (position.y < 0) {
        setMovingUp(false);
      } else if (position.y >= maxTop) {
        setMovingUp(true);
      }
    }
  }, [play, position, p1y, p2y, setPlay, movingLeft]);

  // Controll Movement
  useEffect(() => {
    let intervalId: number;
    if (play) {
      const movementRate = 5;

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
