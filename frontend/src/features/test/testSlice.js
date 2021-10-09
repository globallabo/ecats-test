import { createSlice } from "@reduxjs/toolkit";

const questionsList = [
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

const initialState = {
  questions: questionsList,
  isStarted: false,
  currentQuestion: 0,
  isFinished: false,
  score: 0,
  userResults: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    startTest: (state) => {
      state.isStarted = true;
    },
    handleAnswerButtonClick: (state, action) => {
      console.log(action.payload);
      console.log(action.payload.isCorrect);

      if (action.payload.isCorrect) {
        state.score += 1;
      }

      if (state.currentQuestion + 1 < state.questions.length) {
        state.currentQuestion += 1;
      } else {
        state.isFinished = true;
      }
    },
  },
});

export const selectQuestions = (state) => state.test.questions;
export const selectCurrentQuestion = (state) => state.test.currentQuestion;
export const selectIsStarted = (state) => state.test.isStarted;
export const selectIsFinished = (state) => state.test.isFinished;

export const { startTest, handleAnswerButtonClick } = testSlice.actions;

export default testSlice.reducer;
