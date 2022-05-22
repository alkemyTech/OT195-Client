import { createAction } from "@reduxjs/toolkit";

//Make action creator
// export const makeActionsCreator =
//   (type, ...argNames) =>
//   (...args) => {
//     const action = { type };
//     argNames.forEach((arg, index) => {
//       action[argNames[index]] = args[index];
//     });
//     return action;
//   };

// asyncTypes
export const makeAsyncTypes = (entity) => [
  createAction(`${entity}/pending`),
  createAction(`${entity}/fulfilled`),
  createAction(`${entity}/rejected`),
];

// asyncMakeActionCreator
export const asyncMac = (asyncTypes) => [
  createAction(asyncTypes[0]),
  createAction(`${asyncTypes[1]}/payload`),
  createAction(`${asyncTypes[2]}/error`),
];
