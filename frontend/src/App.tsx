import React from 'react';
import './App.css';
import Emoji from './components/Emoji/Emoji';
import emojis from './data/index.json';

function App() {


  const myEmoji = emojis['Animals & Nature'][1].emoji;
  
  
  // ++++++++++++++++++++ Random Algorithm TESTING ++++++++++++++++++++++:
  

  const keys = Object.keys(emojis);
  let keyIndex = Math.floor( Math.random() * keys.length );
  const groupedEmojis = (emojis as any)[ keys[keyIndex] ];
  const emojiIndex = Math.floor( Math.random() * groupedEmojis.length );
  console.log(  groupedEmojis[ emojiIndex ] )
  

  // ====================================================================
  
  
  return (
    <div className="App">
      <h1>Emoji Dice</h1>
      <Emoji emoji={myEmoji}/>
    </div>
  );
}

export default App;
