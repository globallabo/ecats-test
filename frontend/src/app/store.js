import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { questionsApi } from "../services/questions";
import testReducer from "../features/test/testSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
});

setupListeners(store.dispatch);
