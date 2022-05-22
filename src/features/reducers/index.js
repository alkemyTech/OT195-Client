import { combineReducers } from "@reduxjs/toolkit";

// For now we are using these actions, in case we start using more than three actions files,
// please, make an index.js file and import them all from that index file
import { loginReducer } from "../actions/loginActions";

const reducers = combineReducers({
  user: loginReducer,
});

export default reducers;
