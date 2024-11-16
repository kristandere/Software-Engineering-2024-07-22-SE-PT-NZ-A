import React from 'react';
import { useEmoji } from './EmojiContext'; 

function Emoji() {
  const { isHappy, toggleMood } = useEmoji(); 

  return (
    <div className="Emoji componentBox">
      <h2>{isHappy ? '😊' : '😢'}</h2>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
