export default function Option({ answerOption, handleAnswerButtonClick }) {
  return (
    <li>
      <button onClick={() => handleAnswerButtonClick(answerOption)}>
        {answerOption.answerText}
      </button>
    </li>
  );
}
