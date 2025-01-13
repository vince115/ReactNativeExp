import React from 'react';
import {ExpenseProvider} from './context/ExpenseContext'
import BottomTabs from './navigation/BottomTabs';

export default function App() {
  return (
    <ExpenseProvider>
      <BottomTabs />
    </ExpenseProvider>
  );
}
