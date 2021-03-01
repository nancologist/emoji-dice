import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { Props } from './types';
import { dispatchSetDice } from '../store/dice/actions';
import { DiceState } from '../store/dice/types';
import Emoji from '../components/Emoji/Emoji';
import emojis from '../data/index.json';

function App(props: Props) {
  const myEmoji = emojis['Animals & Nature'][1].emoji;
  
  const handleClick = () => {
    props.setDice()
  };

  return (
    <div className="App">
      <h1>Emoji Dice</h1>
      <Emoji emoji={myEmoji}/>
      <br/><br/>
      <button onClick={handleClick}>Rand EMOJI</button>
    </div>
  );
}

const mapStateToProps = (state: DiceState) => ({

});

const mapDispatchToProps = {
    setDice: () => (dispatchSetDice())
};

export const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(App);
