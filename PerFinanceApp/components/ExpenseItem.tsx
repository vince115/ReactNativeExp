import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface ExpenseItemProps {
  id: string; // 唯一標識符
  description: string; // 收支描述
  amount: number; // 收支金額
  onDelete: (id: string) => void; // 刪除回調函式
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ id, description, amount, onDelete }) => {
  // 處理刪除操作
  const handleDelete = () => {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDelete(id),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* 描述 */}
      <Text style={styles.description}>{description}</Text>
      {/* 金額 */}
      <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      {/* 刪除按鈕 */}
      <TouchableOpacity onPress={handleDelete}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

// 樣式設計
const styles = StyleSheet.create({
  container: {
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
});

export default ExpenseItem;
