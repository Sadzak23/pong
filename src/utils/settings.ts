import { lsGet } from './localStorageUtils';

export const paddleSpeed = 20;
export const ballSpeed = Number(lsGet('ballSpeed') || 15);
export const ballSize = 24;
export const paddleSize = 150;
export const getGameTo = () => Number(lsGet('gameTo') || 5);

export const controls = {
  p1: { up: 'KeyW', down: 'KeyS' },
  p2: { up: 'ArrowUp', down: 'ArrowDown' },
};
