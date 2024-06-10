import { useState, useContext } from "react";
import ExpectedWord from "./ExpectedWord";
import { EligibilityChecker, LetterChecker } from "../utils/WordChecker";
import { WordContext } from "../store/word-context";

export default function Words({ guessCount, letterCount }) {
  const [word, setWord] = useState("");
  const [guessIndex, setGuessIndex] = useState(0);
  const [guessedWords, setGuessedWords] = useState(Array(guessCount).fill(""));

  const wordCtx = useContext(WordContext);

  const handleKeyChange = ({ key }) => {
    if (key === "Backspace") {
      setWord((prevWord) => prevWord.slice(0, -1));
    } else if (key === "Enter") {
      if (word.length < letterCount) {
        console.log("Word is not full yet");
        return;
      } else if (!EligibilityChecker(word, letterCount)) {
        console.log("Word is not eligible");
        return;
      } else if (guessIndex === guessCount - 1) {
        console.log("You have reached the guess limit");
        wordCtx.showEndModal();
        return;
      }
      const calculatedWord = LetterChecker(word, wordCtx.expectedWord);
      setGuessedWords((prevGuessedWords) =>
        prevGuessedWords.map((prevGuessedWord, index) =>
          index === guessIndex ? calculatedWord : prevGuessedWord
        )
      );
      setGuessIndex((prevGuessIndex) => prevGuessIndex + 1);
      setWord("");
      console.log("Word is eligible");
      console.log(wordCtx.winCondition);
    } else if (word.length === letterCount) {
      console.log("Word is full");
      return;
    } else if (key.length === 1) {
      if (key.match(/[a-z]/i)) {
        setWord(word + key.toUpperCase());
      } else {
        console.log("Invalid key");
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
    </div>
  );
}
