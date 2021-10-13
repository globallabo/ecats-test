import { useSelector, useDispatch } from "react-redux";

import {
  selectQuestions,
  selectCurrentQuestion,
  handleAnswerButtonClick,
} from "../testSlice";
import Timer from "./Timer";

export default function Header() {
  const questions = useSelector(selectQuestions);
  const numQuestions = questions.length;
  const currentQuestion = useSelector(selectCurrentQuestion);
  const dispatch = useDispatch();
  const timeoutAnswer = { answerText: "TIMEOUT", isCorrect: false };

  return (
    <div className="header">
      <h2>
        Question {currentQuestion + 1} of {numQuestions}
      </h2>
      <Timer
        duration={30}
        onTimeout={() => dispatch(handleAnswerButtonClick(timeoutAnswer))}
      />
    </div>
  );
}
