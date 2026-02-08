import { lsGet } from './localStorageUtils';
import { ballSize, paddleSize } from './settings';

export const getBallInitialPosition = () => ({
  x: document.body.clientWidth / 2 - ballSize / 2,
  y: (document.body.clientHeight - 50 - ballSize) / 2,
});

export const getBallIncrements = (hitY?: number) => {
  const ballSpeed = Number(lsGet('ballSpeed') || 15);
  const yIndex = hitY ? (hitY > 1 ? hitY - 1 : 1 - hitY) : Math.random();
  const y = (yIndex * ballSpeed) / 1.5;
  const x = ballSpeed - y;
  return { x, y };
};

export const paddleHitBall = (paddleY: number, ballY: number) =>
  paddleY <= ballY + ballSize && ballY <= paddleY + paddleSize;
