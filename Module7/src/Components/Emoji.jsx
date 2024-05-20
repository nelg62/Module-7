import React from "react";
import { useEmoji } from "../context/EmojiContext";

function Emoji() {
  const { mood, happy, somethingFunny, angry, setEmojiMood } = useEmoji();

  return (
    <div className="Emoji">
      Current Mood: {mood}
      <button onClick={somethingFunny}>Something is Funny</button>
      <button onClick={happy}>Happy</button>
      <button onClick={angry}>Angry</button>
      <button onClick={() => setEmojiMood("😫")}>Tired</button>
    </div>
  );
}

export default Emoji;
