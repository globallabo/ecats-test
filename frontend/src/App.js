import { useState } from "react";
import Card from "./components/Card";

const tempdata = [
  {
    id: 1,
    instructionText: "Choose the correct answer to complete the text.",
    questionText: "Henry __ a good boy.",
    answerOptions: [
      { answerText: "are", isCorrect: false },
      { answerText: "be", isCorrect: false },
      { answerText: "been", isCorrect: false },
      { answerText: "is", isCorrect: true },
    ],
  },
  {
    id: 2,
    instructionText: "Choose the correct sentence for the text to complete.",
    questionText: "much",
    answerOptions: [
      { answerText: "I feel ___ better now.", isCorrect: true },
      { answerText: "I ___ like this new computer.", isCorrect: false },
      { answerText: "I like ___ spicy food.", isCorrect: false },
      { answerText: "I sleep on the ___ weekends.", isCorrect: false },
    ],
  },
  {
    id: 3,
    instructionText: "Choose the answer that cannot complete the text.",
    questionText: "the best",
    answerOptions: [
      { answerText: "It was ___ movie I had ever seen.", isCorrect: false },
      { answerText: "I had ___ time.", isCorrect: false },
      { answerText: "That was ___ concert in a long time.", isCorrect: false },
      { answerText: "___ really like the movie.", isCorrect: true },
    ],
  },
  {
    id: 4,
    instructionText: "Choose the correct position for the text in parentheses.",
    questionText: "These ① chicken wings ② are ③ spicy to ④ eat. (too)",
    answerOptions: [
      { answerText: "①", isCorrect: false },
      { answerText: "②", isCorrect: false },
      { answerText: "③", isCorrect: true },
      { answerText: "④", isCorrect: false },
    ],
  },
];

function App() {
  const [questions, setQuestions] = useState(tempdata);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState([]);

  const [showResultPage, setShowResultPage] = useState(false);

  const handleAnswerButtonClick = (answerOption) => {
    console.log(answerOption);
    console.log(answerOption.isCorrect);

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
