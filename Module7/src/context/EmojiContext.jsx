import React, { useState, useContext, createContext } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = ({ children }) => {
  const [mood, setEmojiMood] = useState("🙂");

  const happy = () => {
    let newMood = "🙂";
    if (mood === "🙂") newMood = "😄";
    else if (mood === "😄") newMood = "😁";

    setEmojiMood(newMood);
  };

  const somethingFunny = () => {
    let newMood = "😆";
    if (mood === "😆") newMood = "😂";
    else if (mood === "😂") newMood = "🤣";

    setEmojiMood(newMood);
  };

  const angry = () => {
    let newMood = "😠";
    if (mood === "😠") newMood = "😡";
    else if (mood === "😡") newMood = "🤬";

    setEmojiMood(newMood);
  };

  return (
    <EmojiContext.Provider
      value={{ mood, happy, somethingFunny, angry, setEmojiMood }}
    >
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => {
  return useContext(EmojiContext);
};
