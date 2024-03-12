export default function LetterBox({ value, isIncluded }) {
  return (
    <div
      className="letter-box"
      style={{ backgroundColor: isIncluded ? "lightgreen" : "" }}
    >
      <input type="text" maxLength="1" disabled value={value} />
    </div>
  );
}
