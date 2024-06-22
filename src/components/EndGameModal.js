import { useRef, useContext } from "react";
import { WordContext } from "../store/word-context";
import "./EndGameModal.css";

export function EndGameModal() {
  const dialogRef = useRef();
  const wordCtx = useContext(WordContext);
  wordCtx.setModalRef(dialogRef.current);

  return (
    <dialog ref={dialogRef} className="end-game-modal">
      <h1>Would you like to play again?</h1>
      <div className="buttons">
        <button>Yes</button>
        <button>No</button>
      </div>
    </dialog>
  );
}
