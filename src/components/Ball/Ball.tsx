import { FC, useContext, useEffect, useState } from 'react';
import { AlertContext } from 'src/context/AlertContext';
import { GameContext } from 'src/context/GameContext';
import { ICoordinates } from 'src/styles/types/Game';
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

  const { play, setPlay, setScore } = useContext(GameContext);
  const p1y = useContext(GameContext).p1.y;
  const p2y = useContext(GameContext).p2.y;
  const { setPlayerScored } = useContext(AlertContext);

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
        if (paddleHitBall(p1y, position.y)) {
          // Ball contact location on the paddle
          const hitY = (position.y - p1y + ballSize / 2) / (paddleSize / 2);
          setIncrements(getBallIncrements(hitY));
          setMovingUp(hitY < 1);
        }
        // Paddel miss/Score
        else {
          setPlayerScored('p2');
          setScore(e => ({ ...e, p2: e.p2 + 1 }));
          setPlay(false);
        }
      } else if (position.x >= maxLeft && !movingLeft) {
        setMovingLeft(true);
        // Paddel hit
        if (paddleHitBall(p2y, position.y)) {
          const hitY = (position.y - p2y + ballSize / 2) / (paddleSize / 2);
          setIncrements(getBallIncrements(hitY));
          setMovingUp(hitY < 1);
        }
        // Paddel miss/Score
        else {
          setPlayerScored('p1');
          setScore(e => ({ ...e, p1: e.p1 + 1 }));
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
  }, [play, position, p1y, p2y, movingLeft, setPlay, setScore, setPlayerScored]);

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
