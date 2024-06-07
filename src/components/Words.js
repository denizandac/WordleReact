import { useState, useContext } from "react";
import ExpectedWord from "./ExpectedWord";
import { EligibilityChecker, LetterChecker } from "../utils/WordChecker";
import { WordContext } from "../store/word-context";

export default function Words({ guessCount, letterCount }) {
  const [word, setWord] = useState("");
  const [guessIndex, setGuessIndex] = useState(0);
  const [guessedWords, setGuessedWords] = useState(Array(guessCount).fill(""));
  const [expectedWord, setExpectedWord] = useState("BEYZA");

  const wordContext = useContext(WordContext);

  const handleKeyChange = ({ key }) => {
    if (key === "Backspace") {
      setWord((prevWord) => prevWord.slice(0, -1));
    } else if (key === "Enter") {
      if (!EligibilityChecker(word, letterCount)) {
        //shake the word
        return;
      } else if (guessIndex === guessCount) {
        wordContext.showModal();
        //game over modal shows up
        return;
      }
      const calculatedWord = LetterChecker(word, expectedWord);
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
    </div>
  );
}
