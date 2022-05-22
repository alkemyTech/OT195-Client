import { makeAsyncTypes, makeAsyncMac } from "../../utils/actionsCreator";
import { createReducer } from "@reduxjs/toolkit";

export const loginUserTypes = makeAsyncTypes("user");
export const [setLoginPending, setLoginFulfilled, setLoginRejected] =
  makeAsyncMac(loginUserTypes.map((e) => e.type));

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
    .addCase(pending, (state) => {
      return {
        ...loginInitialState,
        loading: "pending",
      };
    })
    .addCase(fulfilled, (state, action) => {
      // Storage token key on local storage
      window.localStorage.setItem(
        "token",
        JSON.stringify(action.payload.token)
      );

      // Update state
      return {
        ...state,
        entity: {
          ...state.entity,
        },
        loading: "succeded",
      };
    })
    .addCase(rejected, (state, action) => {
      state.error = action.error;
      state.loading = "rejected";
    })
    .addDefaultCase((state, action) => {});
});
