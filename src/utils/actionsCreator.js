import { createAction } from "@reduxjs/toolkit";

//Make action creator
export const mac =
  (type, ...argNames) =>
  (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };

// asyncTypes
export const makeAsyncTypes = (entity) => [
  createAction(`${entity}/pending`),
  createAction(`${entity}/fulfilled`),
  createAction(`${entity}/rejected`),
];

// asyncMakeActionCreator
export const makeAsyncMac = (asyncTypes) => [
  mac(asyncTypes[0]),
  mac(asyncTypes[1], "payload"),
  mac(asyncTypes[2], "error"),
];
