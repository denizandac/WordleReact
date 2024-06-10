import { useContext, useRef } from "react";
import { WordContext } from "../store/word-context";

export const YourWordModal = () => {
  const wordCtx = useContext(WordContext);
  const dialogRef = useRef();
  const inputRef = useRef();
  const setYourExpectedWord = (newWord) => {
    if (newWord.length !== 5) return;
    wordCtx.setExpectedWord(newWord.toUpperCase());
  };
  return (
    <div className="your-word-modal">
      <dialog open ref={dialogRef} style={{ backgroundColor: "lightblue" }}>
        <h1>Your Word</h1>
        <input ref={inputRef} placeholder={wordCtx.expectedWord}></input>
        <button
          onClick={() =>
            setYourExpectedWord(inputRef.current.value.toUpperCase())
          }
        >
          Set New Word
        </button>
      </dialog>
    </div>
  );
};
