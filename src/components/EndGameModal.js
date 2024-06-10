import { useRef, useContext } from "react";
import { WordContext } from "../store/word-context";

export function EndGameModal() {
  const dialogRef = useRef();
  const wordCtx = useContext(WordContext);
  wordCtx.setModalRef(dialogRef.current);
  return (
    <dialog ref={dialogRef} className="end-game-modal">
      <h1>Game Over</h1>
      <p>Would you like to play again?</p>
      <button>Yes</button>
      <button>No</button>
    </dialog>
  );
}
