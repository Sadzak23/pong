import { LsItem, PlayerId } from 'src/styles/types/Game';

export const lsSet = (item: LsItem, value: string) => localStorage.setItem(item, value);
export const lsGet = (item: LsItem) => localStorage.getItem(item);

export const getScore = () => ({
  p1: lsGet('p1-score'),
  p2: lsGet('p2-score'),
});

export const setScore = (player: PlayerId, score: number) => {
  lsSet(`${player}-score`, score.toString());
};
