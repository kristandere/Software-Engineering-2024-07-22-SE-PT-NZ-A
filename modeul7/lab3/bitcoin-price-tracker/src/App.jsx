import React from 'react';
import Emoji from './components/Emoji';
import BitcoinRates from './components/BitcoinRates';
import { EmojiProvider } from './context/EmojiContext'; 

function App() {
  return (
    <EmojiProvider>
      <div>
        <h1>Bitcoin and Mood App</h1>
        <Emoji />
        <BitcoinRates />
      </div>
    </EmojiProvider>
  );
}

export default App;
