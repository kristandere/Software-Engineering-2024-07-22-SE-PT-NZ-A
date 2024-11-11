import React, { createContext, useState, useContext } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [currentEmoji, setCurrentEmoji] = useState('😊'); 

  const changeEmoji = () => {
    const emojis = ['😊', '😢', '😡', '😍', '😴', '🤔'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setCurrentEmoji(randomEmoji);
  };

  return (
    <EmojiContext.Provider value={{ currentEmoji, changeEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};


export const useEmoji = () => {
  return useContext(EmojiContext);
};