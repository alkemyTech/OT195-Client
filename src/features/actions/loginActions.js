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
  loading: "idle",
};

export const loginReducer = createReducer(loginInitialState, (builder) => {
  const [pending, fulfilled, rejected] = loginUserTypes;

  builder
    .addCase(pending, (state) => {
      state.loading = "loading";
    })
    .addCase(fulfilled, (state, action) => {
      state.entity = action.payload;
      state.loading = "succeded";
    })
    .addCase(rejected, (state, action) => {
      state.error = action.error;
      state.loading = "rejected";
    })
    .addDefaultCase((state, action) => {});
});
