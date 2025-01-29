import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";

const store = configureStore({
    reducer: {
      cards: cardReducer, // 綁定卡片的 reducer
    },
  });

export type RootState = ReturnType<typeof store.getState>; // 定義 RootState 類型
export type AppDispatch = typeof store.dispatch;          // 定義 Dispatch 類型

export default store;
