export type PlayerId = 'p1' | 'p2';
export type PlayerMove = 'up' | 'down' | '';
export type LsItem = 'p1-name' | 'p2-name' | 'gameTo';
export type Score = {
  [key in PlayerId]: number;
};
export type ICoordinates = {
  x: number;
  y: number;
};
