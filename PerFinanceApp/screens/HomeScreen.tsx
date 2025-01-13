import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import ExpenseForm from '../components/ExpenseForm'; // 引入自定義的 ExpenseForm 元件

interface Expense {
  id: string; // 唯一標識符
  amount: number; // 金額
  description: string; // 描述
}

// HomeScreen 元件
const HomeScreen = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]); // 管理收支的列表

  // 新增收支項目
  const handleAddExpense = (amount: number, description: string) => {
    // 建立新收支項目
    const newExpense: Expense = {
      id: Date.now().toString(), // 以時間戳作為唯一標識符
      amount,
      description,
    };

    // 更新收支列表
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  // 刪除收支項目
  const handleDeleteExpense = (id: string) => {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () =>
            setExpenses((prevExpenses) =>
              prevExpenses.filter((expense) => expense.id !== id)
            ),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* 標題 */}
      <Text style={styles.title}>Expense Tracker</Text>

      {/* 新增收支表單 */}
      <ExpenseForm onAddExpense={handleAddExpense} />

      {/* 收支列表 */}
      <FlatList
        data={expenses} // 綁定收支數據
        keyExtractor={(item) => item.id} // 設置唯一鍵
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            <Text
              style={styles.delete}
              onPress={() => handleDeleteExpense(item.id)} // 點擊刪除
            >
              ❌
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No expenses recorded yet.</Text>
        } // 當列表為空時顯示的文字
      />
    </View>
  );
};

// 樣式設計
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  expenseItem: {
    flexDirection: 'row', // 水平排列
    justifyContent: 'space-between', // 兩端對齊
    alignItems: 'center', // 垂直居中
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 16,
    flex: 1, // 占據最大可用空間
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  delete: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    color: '#aaa',
  },
});

export default HomeScreen;
