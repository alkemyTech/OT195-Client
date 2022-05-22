import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "../actions/loginActions";

const reducers = combineReducers({
  user: loginReducer,
});

export default reducers;
