// screens/StatisticsScreen.tsx
//該頁面顯示收支的統計資料，使用 Victory Native 圖表庫來動態生成圓餅圖和條形圖
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { VictoryPie, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { VictoryPie, VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import { useExpenseContext } from '../context/ExpenseContext'; // 引入收支上下文
import Chart from '../components/Chart';

const StatisticsScreen = () => {
  const { expenses } = useExpenseContext(); // 從上下文獲取收支資料

  console.log("Expenses Data:", expenses);

  // 計算總收入與支出
  const income = expenses
    .filter((expense) => expense.amount > 0)
    .reduce((sum, expense) => sum + expense.amount, 0);

  const expensesTotal = expenses
    .filter((expense) => expense.amount < 0)
    .reduce((sum, expense) => sum + Math.abs(expense.amount), 0);

    console.log("Income Entries:", income);
    console.log("Expense Entries:", expensesTotal);

  // 格式化為 VictoryPie 資料
  const pieData = [
    { x: 'Income', y: income },
    { x: 'Expenses', y: expensesTotal },
  ];

  // 條形圖數據（按描述分類統計）
  const barData = expenses.map((expense) => ({
    x: expense.description,
    y: Math.abs(expense.amount),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      <Chart income={income} expenses={expensesTotal} barData={barData} />

      {/* 圓餅圖 */}
      <Text style={styles.sectionTitle}>Income vs Expenses</Text>
      <VictoryPie
        data={pieData}
        colorScale={['green', 'red']} // 設置圓餅圖的顏色
        labels={({ datum }) => `${datum.x}: $${datum.y.toFixed(2)}`}
        style={{
          labels: { fontSize: 12, fill: '#333' },
        }}
        innerRadius={50}
      />

      {/* 條形圖 */}
      <Text style={styles.sectionTitle}>Expenses Breakdown</Text>
      {barData.length > 0 ? (
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 20 }}>
          <VictoryBar
            data={barData}
            style={{
              data: { fill: '#c43a31' },
            }}
            labels={({ datum }) => `$${datum.y.toFixed(2)}`}
          />
        </VictoryChart>
      ) : (
        <Text style={styles.emptyText}>No expenses to display.</Text>
      )}
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default StatisticsScreen;
