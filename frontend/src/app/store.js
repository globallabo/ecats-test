import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { ecatsApi } from "./services/ecats";
import testReducer from "../features/test/testSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    [ecatsApi.reducerPath]: ecatsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecatsApi.middleware),
});

setupListeners(store.dispatch);
