import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";

import { selectCurrentQuestion, handleAnswerButtonClick } from "../testSlice";
import Timer from "./Timer";

export default function Header() {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const timerDuration = 30;
  const timeoutAnswer = { answerText: "TIMEOUT", isCorrect: false };

  return (
    <Box>
      <Timer
        duration={timerDuration}
        onTimeout={() => dispatch(handleAnswerButtonClick(timeoutAnswer))}
        currentQuestion={currentQuestion}
      />
    </Box>
  );
}
