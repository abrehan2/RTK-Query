// IMPORTS -
import { configureStore } from "@reduxjs/toolkit";
import { API } from "./api";
import { myReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    [myReducer.name]: myReducer.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(API.middleware),
});
