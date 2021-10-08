import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectQuestions,
  selectCurrentQuestion,
  incrementScore,
  nextQuestion,
} from "./features/test/testSlice";

import Card from "./components/Card";

function App() {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const [userResponses, setUserResponses] = useState([]);

  const [showResultPage, setShowResultPage] = useState(false);

  const handleAnswerButtonClick = (answerOption) => {
    console.log(answerOption);
    console.log(answerOption.isCorrect);

    if (answerOption.isCorrect) {
      dispatch(incrementScore());
    }

    if (currentQuestion + 1 < questions.length) {
      dispatch(nextQuestion());
    } else {
      setShowResultPage(true);
    }
  };

  return (
    <Card
      question={questions[currentQuestion]}
      currentQuestion={currentQuestion}
      numQuestions={questions.length}
      handleAnswerButtonClick={handleAnswerButtonClick}
      showResultPage={showResultPage}
    />
  );
}

export default App;
