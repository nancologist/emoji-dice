import { Emoji } from '../../data/types';

export const GET_DICE = 'GET_DICE';

export interface DiceState {
    dice: Emoji[];
    usedEmojis: string[]
}

interface GetDice {
    type: typeof GET_DICE;
}

export type DiceActionTypes = GetDice;
