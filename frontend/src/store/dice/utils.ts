import { Emoji } from '../../data/types';

export const getEmojis = (emojis: any, usedEmojis: string[]): Emoji[] => {
    // Todo: Filter the used emojis...
    const result: Emoji[] = [];
    for (let i = 0; i < 9; i++) {
        const emoji = getRandomEmoji(emojis);
        result.push(emoji);
    }
    console.log(result);
    return result
}

export const getRandomEmoji = (emojis: any): Emoji => {
    const keys = Object.keys(emojis);
    let keyIndex = Math.floor(Math.random() * keys.length);
    const groupedEmojis = (emojis as any)[keys[keyIndex]];
    const emojiIndex = Math.floor(Math.random() * groupedEmojis.length);
    return groupedEmojis[emojiIndex]
}