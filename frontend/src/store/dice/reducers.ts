import { DiceState, DiceActionTypes, GET_DICE } from './types';
import { getEmojis } from './utils';
import { emojis } from '../../data/emojis';

const initialState: DiceState = {
    dice: [],
    usedEmojis: []
};

export default function reducer (
    state = initialState,
    action: DiceActionTypes
): DiceState {
    switch (action.type) {
        case GET_DICE:
            return {
                ...state,
                dice: getEmojis(emojis, state.usedEmojis)
            };
            break;
    }

    return state;
}
