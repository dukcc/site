import { atom } from 'nanostores';

export type ce3Store = {
    pos: number;
    meowMax: number;
    pos89: number;
    freq: number;
};

export const ce3Store = atom<ce3Store>({
    pos: 50,
    meowMax: 2,
    pos89: 40,
    freq: 50
});
