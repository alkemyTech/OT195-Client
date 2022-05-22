import { configureStore } from "@reduxjs/toolkit";

// Middleware to use async thunks
import asyncMiddleware from "../middlewares/asyncMiddleware";

// Combined reducers file
import reducers from "../features/reducers";

// Store configuration

export const store = configureStore({
  reducer: reducers,
  middleware: [asyncMiddleware],
  // Config to use redux devtools extensions on browser
  devTools: true,
});
