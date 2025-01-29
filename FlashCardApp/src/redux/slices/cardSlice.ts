import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  id: string;       // 卡片唯一 ID
  question: string; // 問題
  answer: string;   // 答案
}

interface CardState {
  cards: Card[];    // 卡片列表
}

const initialState: CardState = {
  cards: [
    {
      id: "1",
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      id: "2",
      question: "What is Redux?",
      answer: "A predictable state container for JavaScript apps.",
    },
  ],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload); // 新增卡片
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload); // 刪除卡片
    },
    updateCard: (state, action: PayloadAction<Card>) => {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) {
        state.cards[index] = action.payload; // 更新卡片
      }
    },
  },
});

export const { addCard, deleteCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;
