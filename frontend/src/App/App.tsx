import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Props } from './types';
import { Emoji as EmojiType } from '../data/types';
import { dispatchGetDice } from '../store/dice/actions';
import { DiceState } from '../store/dice/types';
import Emoji from '../components/Emoji/Emoji';

function App(props: Props) {
  useEffect(() => {
    props.getDice();
  }, []);

  return (
    <div className="App">
      <h1>Emoji Dice</h1>
      <div className="dice">
        {props.dice.map((item: EmojiType) => 
          <Emoji key={item.name} emoji={item.emoji}/>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: DiceState) => ({
  dice: state.dice
});

const mapDispatchToProps = {
    getDice: () => (dispatchGetDice())
};

export const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(App);
