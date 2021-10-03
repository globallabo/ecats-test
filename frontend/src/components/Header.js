import Question from "./Question";

export default function Header({ currentQuestion, numQuestions }) {
  return (
    <div className="header">
      <h2>
        Question {currentQuestion + 1} of {numQuestions}
      </h2>
    </div>
  );
}
