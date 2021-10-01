import { useState } from "react";
import Card from "./components/Card";

const tempdata = [
  {
    id: 1,
    "question": "English is ___.",
    "options": [
      "great", "good", "so so", "bad"
    ],
    "answer": "great"
  },
  {
    id: 2,
    "question": "Henry __ a good boy.",
    "options": [
      "are", "be", "been", "is"
    ],
    "answer": "is"
  }
]

function App() {
  const [questions, setQuestions] = useState(tempdata);

  return (
    <Card questions={questions} />
  );
}

export default App;
