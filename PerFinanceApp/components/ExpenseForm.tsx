import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// 建立一個 Props 介面，若需要從父元件傳遞函式
interface ExpenseFormProps {
  onAddExpense: (amount: number, description: string) => void; // 接收新增收支的回呼函式
}

// 定義 ExpenseForm 元件，接收 Props
const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  // 使用 useState 管理表單輸入的金額和描述
  const [amount, setAmount] = useState<string>(''); // 金額輸入
  const [description, setDescription] = useState<string>(''); // 描述輸入

  // 表單提交處理函式
  const handleSubmit = () => {
    // 驗證輸入
    if (!amount || !description) {
      alert('Please fill in all fields');
      return;
    }
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    // 將金額與描述傳遞給父元件的回呼函式
    onAddExpense(numericAmount, description);
    // 重置表單
    setAmount('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      {/* 標題 */}
      <Text style={styles.title}>Add Expense</Text>
      {/* 金額輸入框 */}
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric" // 設定鍵盤類型為數字
        value={amount}
        onChangeText={setAmount} // 更新 amount 狀態
      />
      {/* 描述輸入框 */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription} // 更新 description 狀態
      />
      {/* 新增按鈕 */}
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

// 樣式定義
const styles = StyleSheet.create({
  container: {
    padding: 16, // 元件內邊距
    backgroundColor: '#fff', // 背景顏色
    borderRadius: 8, // 圓角
    shadowColor: '#000', // 陰影顏色
    shadowOpacity: 0.1, // 陰影透明度
    shadowRadius: 8, // 陰影半徑
    elevation: 2, // Android 陰影
  },
  title: {
    fontSize: 20, // 標題字型大小
    fontWeight: 'bold', // 標題字型粗細
    marginBottom: 16, // 與下方元件的間距
  },
  input: {
    borderWidth: 1, // 輸入框邊框寬度
    borderColor: '#ccc', // 邊框顏色
    borderRadius: 4, // 圓角
    padding: 8, // 內邊距
    marginBottom: 12, // 與下方元件的間距
  },
});

export default ExpenseForm;
