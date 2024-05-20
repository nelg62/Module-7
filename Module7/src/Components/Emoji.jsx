import { useState } from "react";

function Emoji() {
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
