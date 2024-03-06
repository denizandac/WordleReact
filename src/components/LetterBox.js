export default function LetterBox({ value }) {
  return (
    <div className="letter-box">
      <input type="text" maxLength="1" disabled value={value} />
    </div>
  );
}
