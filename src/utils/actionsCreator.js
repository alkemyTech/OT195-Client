import { createAction } from "@reduxjs/toolkit";

// Make action creator
// Params: 1. type of action, 2. action
// Returns: A new method to dispatch actions
// The returned method recieves the values that we want to store.
// ============================
//  e.g:
//    const setUserFulfilled = mac(user/fulfilled, "payload");
//
//    result:
//    A method to dispatch "user/fulfilled" and store, in this example on "payload", what we want.
//    setUserFulfilled({name: "test", id: "2"}) => {type: "user/fulfilled", payload: {name: "test", id: "2"}}

export const mac =
  (type, ...argNames) =>
  (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };

// Make Async Action Types
// Create actions for async types
export const makeAsyncTypes = (entity) => [
  createAction(`${entity}/pending`),
  createAction(`${entity}/fulfilled`),
  createAction(`${entity}/rejected`),
];

// Make Async Mac
// Create actions dispatchers for async types
export const makeAsyncMac = (asyncTypes) => [
  mac(asyncTypes[0]),
  mac(asyncTypes[1], "payload"),
  mac(asyncTypes[2], "error"),
];
