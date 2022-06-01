import { makeAsyncTypes, makeAsyncMac, mac } from "../../utils/actionsCreator";
import { createReducer, createAction } from "@reduxjs/toolkit";

// Create an async collection of async types for "user"
// loginUserTypes has inside: ["user/pending", "user/fulfilled", "user/rejected"]
export const loginUserTypes = makeAsyncTypes("user");

// Create action for logging out
export const logoutType = createAction("user/logout");

// Create an array of methods to dispatch actions for user
// In makeAsyncMac we are passing: ["user/pending", "user/fulfilled", "user/rejected"]
export const [setLoginPending, setLoginFulfilled, setLoginRejected] =
  makeAsyncMac(loginUserTypes.map((e) => e.type));

// Method to dispatch logout
export const logOut = mac(logoutType.type);

// Initial state
const loginInitialState = {
  entity: {
    id: "",
    firstName: "",
    lastName: "",
    image: "",
    roleId: "",
  },

  error: {
    msg: "",
    code: "",
  },
  loading: "idle",
};

export const loginReducer = createReducer(loginInitialState, (builder) => {
  const [pending, fulfilled, rejected] = loginUserTypes;

  builder
    // user/pending
    .addCase(pending, (state) => {
      return {
        ...loginInitialState,
        loading: "pending",
      };
    })
    //user/fulfilled"
    .addCase(fulfilled, (state, action) => {
      const payload = action.payload;
      const { token, ...data } = payload;

      // Storage token key on local storage
      window.localStorage.setItem("token", token);

      return {
        entity: {
          ...state.entity,
          ...data.data,
        },
        loading: "succeded",
      };
    })
    // user/rejected
    .addCase(rejected, (state, action) => {
      return {
        ...state,
        error: {
          ...action.error,
        },
        loading: "rejected",
      };
    })
    .addCase(logoutType, (state, action) => {
      // Clear local storage token
      window.localStorage.removeItem("token");

      // Return initial state
      return { ...loginInitialState };
    })
    .addDefaultCase((state, action) => {});
});
