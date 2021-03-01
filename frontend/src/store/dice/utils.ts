import { Emoji } from '../../data/types';

export const getEmojis = (emojis: Emoji[], usedEmojis: string[]): Emoji[] => {
    // Todo: Filter the used emojis...

    const result: Emoji[] = [];
    for (let i = 0; i < 9; i++) {
        const randIndex = getNewRandIndex(emojis.length, result)
        const emoji = { ...emojis[randIndex!], id: randIndex };
        result.push(emoji);
    }
    return result
}

const getNewRandIndex = (max: number, result: Emoji[]) => {
    const randIndex = Math.floor( Math.random() * max );
    let alreadyAdded = !!result.find(emoji => emoji.id === randIndex)
    if (!alreadyAdded) return randIndex;
    getNewRandIndex(max, result);
}