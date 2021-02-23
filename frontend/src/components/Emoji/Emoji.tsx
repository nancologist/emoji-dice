import React, { FunctionComponent } from 'react'

import { EmojiProps } from './type';
import './Emoji.css';

const Emoji: FunctionComponent<EmojiProps> = (props) => {
    const { emoji } = props;
    return <div className="emoji">{ emoji }</div>
}

export default Emoji;