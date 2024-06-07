import Letterbox from "./LetterBox.js";

export default function ExpectedWord({ letterCount, enteredValue, mode }) {
  const letterArray = enteredValue
    ? Array(letterCount)
        .fill("")
        .map((_, index) => enteredValue[index] || "")
    : Array(letterCount).fill("");
  return (
    <div className="expected-word">
      {letterArray.map((letter, index) => (
        <Letterbox
          key={index}
          value={mode === "active" ? letter : letter.letter}
          isIncluded={mode === "inactive" ? letter.type : undefined}
        />
      ))}
    </div>
  );
}
