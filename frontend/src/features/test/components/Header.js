import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    <Box>
      <Typography variant="h1">
        Question {currentQuestion + 1} of {numQuestions}
      </Typography>
      <Timer
        duration={timerDuration}
        onTimeout={() => dispatch(handleAnswerButtonClick(timeoutAnswer))}
        currentQuestion={currentQuestion}
      />
    </Box>
  );
}
