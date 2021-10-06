import { useState } from "react";
import Card from "./components/Card";

const tempdata = [
  {
    id: 1,
    instructionText: "Please choose the word that best completes the sentence.",
    questionText: "English is ___.",
    answerOptions: [
      { answerText: "great", isCorrect: true },
      { answerText: "good", isCorrect: false },
      { answerText: "so-so", isCorrect: false },
      { answerText: "bad", isCorrect: false },
    ],
  },
  {
    id: 2,
    instructionText: "Please choose the word that best completes the sentence.",
    questionText: "Henry __ a good boy.",
    answerOptions: [
      { answerText: "are", isCorrect: false },
      { answerText: "be", isCorrect: false },
      { answerText: "been", isCorrect: false },
      { answerText: "is", isCorrect: true },
    ],
  },
];

function App() {
  const [questions, setQuestions] = useState(tempdata);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] =useState([]);

  const [showResultPage, setShowResultPage] = useState(false);

  const handleAnswerButtonClick = (answerOption) => {
    console.log(answerOption);
    console.log((answerOption.isCorrect))

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
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
