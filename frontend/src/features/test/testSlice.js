import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testTakerID: 0,
  testTakerEmail: "",
  testInstance: 0,
  isStarted: false,
  currentQuestion: 0,
  // For now, the total questions is hard-coded, because I can't quite work out how to get it cleanly from the API to here
  totalQuestions: 4,
  isFinished: false,
  score: 0,
  userResults: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    startTest: (state, action) => {
      state.testTakerID = action.payload.testTakerID;
      state.testTakerEmail = action.payload.testTakerEmail;
      state.testInstance = action.payload.testInstance;
      state.isStarted = true;
    },
    handleAnswerButtonClick: (state, action) => {
      state.userResults.push({
        id: action.payload.id,
        canDoStatement: action.payload.target.canDoStatementJa,
        instructionText: action.payload.questionType.instructionTextJa,
        questionText: action.payload.questionText,
        correctAnswer: action.payload.answerOptions.find(
          (item) => item.isCorrect === true
        ).answerText,
        userAnswer: action.payload.userAnswer.answerText,
      });

      if (action.payload.userAnswer.isCorrect) {
        state.score += 1;
      }

      if (state.currentQuestion + 1 < state.totalQuestions) {
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
export const selectUserResults = (state) => state.test.userResults;
export const selectTestTakerID = (state) => state.test.testTakerID;
export const selectTestTakerEmail = (state) => state.test.testTakerEmail;
export const selectTestInstance = (state) => state.test.testInstance;

export const { startTest, handleAnswerButtonClick } = testSlice.actions;

export default testSlice.reducer;
