import { useState } from "react";
import ExpectedWord from "./ExpectedWord";

export default function Words({ guessCount, letterCount }) {
  const [word, setWord] = useState("");
  const [guessIndex, setGuessIndex] = useState(0);

  const wordLength = word.length;
  const guessedWords = Array(guessCount).fill("");

  const handleKeyChange = ({ key }) => {
    if (key === "Backspace") {
      setWord((prevWord) => prevWord.slice(0, -1));
    } else if (key === "Enter") {
      setGuessIndex((prevGuessIndex) =>
        prevGuessIndex < guessCount - 1 ? prevGuessIndex + 1 : prevGuessIndex
      );
      setWord("");
    } else if (wordLength === letterCount) {
      return;
    } else if (key.length === 1) {
      if (key.match(/[a-z]/i)) {
        setWord(word + key.toUpperCase());
      } else {
        return;
      }
    }
  };
  return (
    <div className="words" onKeyDown={handleKeyChange} tabIndex={0}>
      {guessedWords.map((_, index) => (
        <ExpectedWord
          key={index}
          letterCount={letterCount}
          enteredValue={index === guessIndex ? word : undefined}
        />
      ))}
      {wordLength},{letterCount},{word}, {guessIndex}, {guessCount}
    </div>
  );
}
