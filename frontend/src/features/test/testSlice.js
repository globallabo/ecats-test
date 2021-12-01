import { createSlice } from "@reduxjs/toolkit";

const questionsList = [
  {
    id: 1,
    target: {
      id: 1,
      level: "1",
      category: "Adjectives",
      subcategory: "combining",
      canDoStatementEn:
        "Can use 'and' to join a limited range of common adjectives.",
      canDoStatementJa:
        "Can use 'and' to join a limited range of common adjectives.",
    },
    questionType: {
      id: 1,
      name: "Completion 1",
      instructionTextEn: "Choose the correct answer to complete the text.",
      instructionTextJa: "正しい答えを選んで文を完成させなさい。",
    },
    questionText: "The weather was cold ___ windy.",
    answerOptions: [
      {
        id: 1,
        answerText: "the",
        isCorrect: false,
      },
      {
        id: 2,
        answerText: "and",
        isCorrect: true,
      },
      {
        id: 3,
        answerText: "same",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "our",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    target: {
      id: 2,
      level: "1",
      category: "Adjectives",
      subcategory: "modifying",
      canDoStatementEn:
        "Can use 'very' with a limited range of common gradable adjectives.",
      canDoStatementJa:
        "Can use 'very' with a limited range of common gradable adjectives.",
    },
    questionType: {
      id: 2,
      name: "Completion 2",
      instructionTextEn:
        "Choose the correct sentence for the text to complete.",
      instructionTextJa: "正しい語句を選んで文を完成させなさい。",
    },
    questionText: "very",
    answerOptions: [
      {
        id: 5,
        answerText: "The curry is ___ hot.",
        isCorrect: true,
      },
      {
        id: 6,
        answerText: "There is ___ lot of ice cream.",
        isCorrect: false,
      },
      {
        id: 7,
        answerText: "This has ___ sauce on it.",
        isCorrect: false,
      },
      {
        id: 8,
        answerText: "I like pizza ___ pasta.",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    target: {
      id: 3,
      level: "2",
      category: "Adjectives",
      subcategory: "combining",
      canDoStatementEn:
        "Can use 'but' to join a limited range of common adjectives, after 'be'.",
      canDoStatementJa:
        "Can use 'but' to join a limited range of common adjectives, after 'be'.",
    },
    questionType: {
      id: 4,
      name: "Position",
      instructionTextEn:
        "Choose the correct position for the text in parentheses.",
      instructionTextJa: "(　) 内の語句の正しい位置を選びなさい。",
    },
    questionText: "The movie ① was ② good ③ long ④. (but)",
    answerOptions: [
      {
        id: 9,
        answerText: "①",
        isCorrect: false,
      },
      {
        id: 10,
        answerText: "②",
        isCorrect: false,
      },
      {
        id: 11,
        answerText: "③",
        isCorrect: true,
      },
      {
        id: 12,
        answerText: "④",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    target: {
      id: 4,
      level: "3",
      category: "Clauses",
      subcategory: "conditional",
      canDoStatementEn:
        "Can use 'if' + present continuous or 'going to' to introduce a possible plan, with modal verbs or imperatives in the main clause to give advice.",
      canDoStatementJa:
        "Can use 'if' + present continuous or 'going to' to introduce a possible plan, with modal verbs or imperatives in the main clause to give advice.",
    },
    questionType: {
      id: 3,
      name: "Completion 3",
      instructionTextEn: "Choose the answer that cannot complete the text.",
      instructionTextJa:
        "文を完成するのに<u>適切ではない</u>答えを選びなさい。",
    },
    questionText: "If you're going to the beach, __.",
    answerOptions: [
      {
        id: 13,
        answerText: "wear a hat",
        isCorrect: false,
      },
      {
        id: 14,
        answerText: "you should drink water",
        isCorrect: false,
      },
      {
        id: 15,
        answerText: "packing a snack",
        isCorrect: true,
      },
      {
        id: 16,
        answerText: "you could bring a towel",
        isCorrect: false,
      },
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
      console.log(action.payload.userAnswer.isCorrect);

      state.userResults.push({
        id: state.questions[state.currentQuestion].id,
        canDoStatement:
          state.questions[state.currentQuestion].target.canDoStatementJa,
        instructionText:
          state.questions[state.currentQuestion].questionType.instructionTextJa,
        questionText: state.questions[state.currentQuestion].questionText,
        correctAnswer: state.questions[
          state.currentQuestion
        ].answerOptions.find((item) => item.isCorrect === true).answerText,
        userAnswer: action.payload.userAnswer.answerText,
      });

      if (action.payload.userAnswer.isCorrect) {
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
export const selectUserResults = (state) => state.test.userResults;

export const { startTest, handleAnswerButtonClick } = testSlice.actions;

export default testSlice.reducer;
