import Letterbox from "./LetterBox.js";

export default function ExpectedWord({ letterCount }) {
  return (
    <div className="expected-word">
      {[...Array(letterCount)].map((_, index) => (
        <Letterbox key={index} />
      ))}
    </div>
  );
}
