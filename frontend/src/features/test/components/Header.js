import { useSelector, useDispatch } from "react-redux";

import {
  selectQuestions,
  selectCurrentQuestion,
  handleAnswerButtonClick,
} from "../testSlice";
import Timer from "./Timer";

export default function Header() {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const numQuestions = questions.length;
  const currentQuestion = useSelector(selectCurrentQuestion);
  const timerDuration = 30;
  const timeoutAnswer = { answerText: "TIMEOUT", isCorrect: false };

  return (
    <div className="header">
      <h2>
        Question {currentQuestion + 1} of {numQuestions}
      </h2>
      <Timer
        duration={timerDuration}
        onTimeout={() => dispatch(handleAnswerButtonClick(timeoutAnswer))}
        currentQuestion={currentQuestion}
      />
    </div>
  );
}
