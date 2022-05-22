import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "../actions/loginActions";

const reducers = combineReducers({
  login: loginReducer,
});

export default reducers;
