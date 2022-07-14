import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import queryReducer from '../pages/query/indexSlice';
import { baseApi } from '../api/base';
import { baseApi1 } from '../api/authBase';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  query: queryReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [baseApi1.reducerPath]: baseApi1.reducer,
});
export const apis = [baseApi.middleware, baseApi1.middleware];

export default rootReducer;
