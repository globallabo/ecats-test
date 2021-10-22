import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { selectQuestions, selectCurrentQuestion } from "./testSlice";

import Header from "./components/Header";
import Option from "./components/Option";
import Question from "./components/Question";

export default function Test() {
  const questions = useSelector(selectQuestions);
  const numQuestions = questions.length;
  const currentQuestion = useSelector(selectCurrentQuestion);
  const question = questions[currentQuestion];

  return (
    <Container>
      <Header currentQuestion={currentQuestion} numQuestions={numQuestions} />
      <Question question={question} />
      <Stack spacing={2}>
        {question.answerOptions.map((answerOption) => {
          return (
            <Option key={answerOption.answerText} answerOption={answerOption} />
          );
        })}
      </Stack>
    </Container>
  );
}
