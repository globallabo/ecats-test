import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/ecats/" }),
  endpoints: (builder) => ({
    getRandomQuestionByLevel: builder.query({
      query: (level) => `r/${level}`,
    }),
    getAllQuestions: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetRandomQuestionByLevelQuery, useGetAllQuestionsQuery } =
  questionsApi;
