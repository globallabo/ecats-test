export default function Option({ option, handleAnswerButtonClick }) {
  return (
    <li>
      <button onClick={handleAnswerButtonClick}>{option}</button>
    </li>
  );
}
