import React from 'react';

import './App.css';
import { dispatchSetDice } from '../store/dice/actions';
import { DiceState } from '../store/dice/types';
import Emoji from '../components/Emoji/Emoji';
import emojis from '../data/index.json';

function App() {
  const myEmoji = emojis['Animals & Nature'][1].emoji;
  
  return (
    <div className="App">
      <h1>Emoji Dice</h1>
      <Emoji emoji={myEmoji}/>
    </div>
  );
}

const mapStateToProps = (state: DiceState) => ({

});

const mapDispatchToProps = () => ({
    setDice: () => (dispatchSetDice())
});

export default App;
