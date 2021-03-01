import { GET_DICE, DiceActionTypes } from './types';

export function dispatchGetDice(): DiceActionTypes {
    return {
        type: GET_DICE
    };
}

