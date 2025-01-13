import React from 'react';
import { View, Text, Switch, Button, StyleSheet, Alert } from 'react-native';
import { useExpenseContext } from '../context/ExpenseContext'; // 使用收支上下文

const SettingsScreen = () => {
  const { setExpenses } = useExpenseContext(); // 從 Context 中獲取重置收支的函式
  const [isDarkMode, setIsDarkMode] = React.useState(false); // 主題切換狀態

  // 處理主題切換
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    Alert.alert('Theme Changed', `You are now in ${!isDarkMode ? 'Dark' : 'Light'} Mode.`);
  };

  // 重置收支資料
  const resetExpenses = () => {
    Alert.alert(
      'Reset Expenses',
      'Are you sure you want to reset all expense data?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => setExpenses([]), // 清空收支資料
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* 標題 */}
      <Text style={styles.title}>Settings</Text>

      {/* 主題切換 */}
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      {/* 重置收支資料按鈕 */}
      <View style={styles.buttonContainer}>
        <Button title="Reset Expenses" onPress={resetExpenses} color="red" />
      </View>
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
    marginBottom: 24,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default SettingsScreen;
