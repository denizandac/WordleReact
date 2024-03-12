import Letterbox from "./LetterBox.js";

export default function ExpectedWord({ letterCount, enteredValue }) {
  const letterArray = enteredValue
    ? Array(letterCount)
        .fill("")
        .map((_, index) => enteredValue[index] || "")
    : Array(letterCount).fill("");
  return (
    <div className="expected-word">
      {letterArray.map((letter, index) => (
        <Letterbox key={index} value={letter} />
      ))}
    </div>
  );
}
