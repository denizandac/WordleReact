import { useState } from "react";
import ExpectedWord from "./ExpectedWord";

export default function Words({ guessCount, letterCount }) {
  const [word, setWord] = useState("");
  const wordLength = word.length;

  const handleKeyChange = ({ key }) => {
    if (key === "Backspace") {
      setWord((prevWord) => prevWord.slice(0, -1));
    } else if (key === "Enter") {
      console.log(word);
      setWord("");
    } else if (wordLength === letterCount) {
      return;
    } else if (key.match(/[a-z]/i)) {
      setWord(word + key.toUpperCase());
    }
  };
  return (
    <div className="words" onKeyDown={handleKeyChange} tabIndex={0}>
      {[...Array(guessCount)].map((_, index) => (
        <ExpectedWord key={index} letterCount={letterCount} />
      ))}
      {wordLength},{letterCount},{word}
    </div>
  );
}
