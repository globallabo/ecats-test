import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecatsApi = createApi({
  reducerPath: "ecatsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/ecats/" }),
  tagTypes: ["Question", "TestTaker"],
  endpoints: (builder) => ({
    getRandomQuestionByLevel: builder.query({
      query: (level) => `r/${level}`,
      providesTags: ["Question"],
    }),
    getAllQuestions: builder.query({
      query: () => `questions/`,
      providesTags: ["Question"],
    }),
    getAllTestTakers: builder.query({
      query: () => `test_takers/`,
      providesTags: ["TestTaker"],
    }),
    createTestTaker: builder.mutation({
      query: (body) => ({
        url: "test_takers/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TestTaker"],
    }),
  }),
});

export const {
  useGetRandomQuestionByLevelQuery,
  useGetAllQuestionsQuery,
  useGetAllTestTakersQuery,
  useCreateTestTakerMutation,
} = ecatsApi;
