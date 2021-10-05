import { useState } from "react";
import Card from "./components/Card";

const tempdata = [
  {
    id: 1,
    instruction: "Please choose the word that best completes the sentence.",
    question: "English is ___.",
    options: ["great", "good", "so so", "bad"],
    answer: "great",
  },
  {
    id: 2,
    instruction: "Please choose the word that best completes the sentence.",
    question: "Henry __ a good boy.",
    options: ["are", "be", "been", "is"],
    answer: "is",
  },
];

function App() {
  const [questions, setQuestions] = useState(tempdata);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResultPage, setShowResultPage] = useState(false);

  const handleAnswerButtonClick = () => {
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
