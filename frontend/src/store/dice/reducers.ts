import { DiceState, DiceActionTypes, SET_DICE } from './types';
import { getEmojis, getRandomEmoji } from './utils';
import emojis from '../../data/index.json';

const initialState: DiceState = {
    dice: [],
    usedEmojis: []
};

export default function reducer (
    state = initialState,
    action: DiceActionTypes
): DiceState {
    switch (action.type) {
        case SET_DICE:
            return {
                ...state,
                dice: getEmojis(emojis, state.usedEmojis)
            };
            break;
    }

    return state;
}
