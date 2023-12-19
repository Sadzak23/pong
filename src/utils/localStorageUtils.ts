import { LsItem } from 'src/styles/types/Game';

export const lsSet = (item: LsItem, value: string) => localStorage.setItem(item, value);
export const lsGet = (item: LsItem) => localStorage.getItem(item);
