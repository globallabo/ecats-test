import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { selectCurrentQuestion, handleAnswerButtonClick } from "../testSlice";
import Timer from "./Timer";

export default function Header() {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const timerDuration = 30;
  const timeoutAnswer = { answerText: "TIMEOUT", isCorrect: false };

  return (
    <Box>
      <Typography variant="h1">問 {currentQuestion + 1}</Typography>
      <Timer
        duration={timerDuration}
        onTimeout={() => dispatch(handleAnswerButtonClick(timeoutAnswer))}
        currentQuestion={currentQuestion}
      />
    </Box>
  );
}
