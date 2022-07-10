import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import { baseApi } from "../api/base";
import { baseApi1 } from "../api/authBase";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [baseApi1.reducerPath]: baseApi1.reducer,
});
export const apis = [baseApi.middleware, baseApi1.middleware];

export default rootReducer;
