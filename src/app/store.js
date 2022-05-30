import { configureStore } from "@reduxjs/toolkit";

// Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Middleware to use async thunks
import asyncMiddleware from "../middlewares/asyncMiddleware";

// Combined reducers file
import reducers from "../features/reducers";

// Redux persist configuration
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Store configuration

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [asyncMiddleware],
  // Config to use redux devtools extensions on browser
  devTools: true,
});

export const persistor = persistStore(store);
