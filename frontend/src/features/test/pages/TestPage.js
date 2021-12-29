import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";

import { useGetAllQuestionsQuery } from "../../../app/services/ecats";
import { selectCurrentQuestion, handleAnswerButtonClick } from "../testSlice";

import Question from "../components/Question";
import Timer from "../components/Timer";

export default function TestPage() {
  const dispatch = useDispatch();
  const {
    data: questions = [],
    isError,
    isLoading,
  } = useGetAllQuestionsQuery();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const question = questions[currentQuestion];
  const timerDuration = 30;
  const timeoutAnswer = { answerText: "TIMEOUT", isCorrect: false };

  // Check for errors or loading (might be a better way)
  if (isError) return <div>Error!</div>;
  if (isLoading) return <div>Loading ...</div>;
  if (!questions) return <div>No data!.</div>;

  return (
    <Container>
      <Question question={question} />
      <Timer
        duration={timerDuration}
        onTimeout={() => dispatch(handleAnswerButtonClick(timeoutAnswer))}
        currentQuestion={currentQuestion}
      />
    </Container>
  );
}
