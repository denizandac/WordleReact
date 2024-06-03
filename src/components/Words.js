import { useState } from "react";
import ExpectedWord from "./ExpectedWord";
import { EligibilityChecker, LetterChecker } from "../utils/WordChecker";

//const dictionary = ["HELLO", "WORLD", "REACT"];
//import from english dictionary API

export default function Words({ guessCount, letterCount }) {
  const [word, setWord] = useState("");
  const [guessIndex, setGuessIndex] = useState(0);
  const [guessedWords, setGuessedWords] = useState(Array(guessCount).fill(""));

  const handleKeyChange = ({ key }) => {
    if (key === "Backspace") {
      setWord((prevWord) => prevWord.slice(0, -1));
    } else if (key === "Enter") {
      if (!EligibilityChecker(word, letterCount, "dictionary")) {
        //shake the word
        return;
      } else if (guessIndex === guessCount) {
        return;
        //game over modal shows up
      }
      const calculatedWord = LetterChecker(word, "BEYZA");
      setGuessedWords((prevGuessedWords) =>
        prevGuessedWords.map((prevGuessedWord, index) =>
          index === guessIndex ? calculatedWord : prevGuessedWord
        )
      );
      setGuessIndex((prevGuessIndex) => prevGuessIndex + 1);
      setWord("");
    } else if (word.length === letterCount) {
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
          enteredValue={index === guessIndex ? word : guessedWords[index]}
          mode={index === guessIndex ? "active" : "inactive"}
        />
      ))}
      {word}
    </div>
  );
}
