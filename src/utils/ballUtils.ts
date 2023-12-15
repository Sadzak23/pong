import { ballSize, ballSpeed, paddleSize } from './settings';

export const getBallInitialPosition = () => ({
  x: document.body.clientWidth / 2 - ballSize / 2,
  y: (document.body.clientHeight - 50 - ballSize) / 2,
});

export const getBallIncrements = () => {
  const y = (Math.random() * ballSpeed) / 1.5;
  const x = ballSpeed - y;
  return { x, y };
};

export const paddleHitBall = (paddleY: number, ballY: number) =>
  paddleY <= ballY + ballSize && ballY <= paddleY + paddleSize;
