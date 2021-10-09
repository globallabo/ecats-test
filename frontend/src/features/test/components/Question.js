export default function Question({ question }) {
  return (
    <>
      <h3>{question.instructionText}</h3>
      <p>{question.questionText}</p>
    </>
  );
}
