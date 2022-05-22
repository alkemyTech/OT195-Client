import { configureStore } from "@reduxjs/toolkit";
import asyncMiddleware from "../middlewares/asyncMiddleware";
import reducers from "../features/reducers";

export const store = configureStore({
  reducer: reducers,
  middleware: [asyncMiddleware],
  devTools: true,
});
