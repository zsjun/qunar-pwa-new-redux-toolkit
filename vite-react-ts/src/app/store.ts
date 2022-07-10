import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import rootReducer, { apis } from "./rootReducer";

// 中间件集合
const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [...getDefaultMiddleware()];
  return middlewareList;
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apis),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
console.log(1223, store.getState());
// 当重新连接的时候，重新请求
setupListeners(store.dispatch);
