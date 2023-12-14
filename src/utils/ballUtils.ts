import { ballSpeed } from './settings';

export const setBallDirection = () => {
  const x = Math.random() * ballSpeed;
  const y = ballSpeed - x;
  return { x, y };
};
