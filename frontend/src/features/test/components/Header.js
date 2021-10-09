import { useSelector } from "react-redux";

import { selectQuestions, selectCurrentQuestion } from "../testSlice";

export default function Header() {
  const questions = useSelector(selectQuestions);
  const numQuestions = questions.length;
  const currentQuestion = useSelector(selectCurrentQuestion);

  return (
    <div className="header">
      <h2>
        Question {currentQuestion + 1} of {numQuestions}
      </h2>
    </div>
  );
}
