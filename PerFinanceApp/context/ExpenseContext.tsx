import React, { createContext, useContext, useState, ReactNode } from 'react';

// 定義收支的資料結構
interface Expense {
  id: string;        // 唯一標識符
  amount: number;    // 金額
  description: string; // 描述
}

// 定義 Context 的值類型
interface ExpenseContextType {
    expenses: Expense[]; // 收支清單
    addExpense: (amount: number, description: string) => void; // 新增收支
    deleteExpense: (id: string) => void; // 刪除收支
    setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>; // 直接設置收支清單
  }


// 初始化 Context，設定默認值為 undefined
const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

// 定義 Context Provider 的 Props
interface ExpenseProviderProps {
  children: ReactNode; // 包裹的子元件
}

// Provider 元件
export const ExpenseProvider: React.FC<ExpenseProviderProps> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: '1', amount: 100, description: 'Salary' },
    { id: '2', amount: -50, description: 'Groceries' },
  ]); // 管理收支列表

  console.log('Expenses Data:', expenses);

  // 新增收支函式
  const addExpense = (amount: number, description: string) => {
    const newExpense: Expense = {
      id: Date.now().toString(), // 使用時間戳生成唯一 ID
      amount,
      description,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]); // 更新狀態
  };


  // 刪除收支函式
  const deleteExpense = (id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id) // 過濾掉目標 ID 的收支
    );
  };

  // 提供 Context 值
  return (
    <ExpenseContext.Provider 
    value={{
        expenses,
        addExpense,
        deleteExpense,
        setExpenses, // 包含 setExpenses
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

// 自定義 Hook，用於方便地訪問 Context
export const useExpenseContext = (): ExpenseContextType => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseProvider');
  }
  return context;
};
