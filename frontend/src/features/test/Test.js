import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import {
  selectQuestions,
  selectCurrentQuestion,
  handleAnswerButtonClick,
} from "./testSlice";

import Option from "./components/Option";
import Question from "./components/Question";
import Timer from "./components/Timer";

export default function Test() {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const question = questions[currentQuestion];
  const timerDuration = 30;
  const timeoutAnswer = { answerText: "TIMEOUT", isCorrect: false };

  return (
    <Container>
      <Question question={question} />
      <Stack spacing={2}>
        {question.answerOptions.map((answerOption) => {
          return (
            <Option key={answerOption.answerText} answerOption={answerOption} />
          );
        })}
      </Stack>
      <Timer
        duration={timerDuration}
        onTimeout={() => dispatch(handleAnswerButtonClick(timeoutAnswer))}
        currentQuestion={currentQuestion}
      />
    </Container>
  );
}
