import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecatsApi = createApi({
  reducerPath: "ecatsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/ecats/" }),
  endpoints: (builder) => ({
    getRandomQuestionByLevel: builder.query({
      query: (level) => `r/${level}`,
    }),
    getAllQuestions: builder.query({
      query: () => `questions`,
    }),
  }),
});

export const { useGetRandomQuestionByLevelQuery, useGetAllQuestionsQuery } =
  ecatsApi;
