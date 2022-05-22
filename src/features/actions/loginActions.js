import { makeAsyncTypes } from "../../utils/actionsCreator";
import { createReducer } from "@reduxjs/toolkit";

const loginInitialState = {
  entity: {
    id: "",
    nombre: "",
    apellido: "",
    image: "",
    roleId: "",
  },
};

export const [pending, fulfilled, rejected] = makeAsyncTypes("login");

export const loginReducer = createReducer(loginInitialState, (builder) => {
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
