import { makeAsyncTypes, makeAsyncMac } from "../../utils/actionsCreator";
import { createReducer } from "@reduxjs/toolkit";

// Create an async collection of async types for "user"
// loginUserTypes has inside: ["user/pending", "user/fulfilled", "user/rejected"]
export const loginUserTypes = makeAsyncTypes("user");

// Create an array of methods to dispatch actions for user
// In makeAsyncMac we are passing: ["user/pending", "user/fulfilled", "user/rejected"]
export const [setLoginPending, setLoginFulfilled, setLoginRejected] =
  makeAsyncMac(loginUserTypes.map((e) => e.type));

// Initial state
const loginInitialState = {
  entity: {
    id: "",
    nombre: "",
    apellido: "",
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
      window.localStorage.setItem("token", JSON.stringify(token));

      return {
        entity: {
          ...state.entity,
          ...data,
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
    .addDefaultCase((state, action) => {});
});
