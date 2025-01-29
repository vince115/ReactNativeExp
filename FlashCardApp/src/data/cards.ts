// src/data/cards.ts

export interface Card {
    id: string;       // 每張卡片的唯一 ID
    question: string; // 問題文本
    answer: string;   // 答案文本
  }
  
  // 初始卡片數據
  export const initialCards: Card[] = [
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
    {
      id: "3",
      question: "What is TypeScript?",
      answer: "A superset of JavaScript that adds static typing.",
    },
  ];
  
  export default initialCards;
  