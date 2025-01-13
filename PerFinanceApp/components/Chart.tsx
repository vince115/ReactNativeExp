import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from 'victory';

interface ChartProps {
  income: number; // 總收入
  expenses: number; // 總支出
  barData: { x: string; y: number }[]; // 條形圖數據，按描述分類
}

const Chart: React.FC<ChartProps> = ({ income, expenses, barData }) => {
  // 格式化圓餅圖的數據
  const pieData = [
    { x: 'Income', y: income },
    { x: 'Expenses', y: expenses },
  ];

  return (
    <View style={styles.container}>
      {/* 圓餅圖 */}
      <Text style={styles.sectionTitle}>Income vs Expenses</Text>
      <VictoryPie
        data={pieData}
        colorScale={['green', 'red']} // 設置圓餅圖顏色
        labels={({ datum }) => `${datum.x}: $${datum.y.toFixed(2)}`} // 圖表標籤
        style={{
          labels: { fontSize: 12, fill: '#333' },
        }}
        innerRadius={50} // 設置內部空心半徑
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
        <Text style={styles.emptyText}>No data to display.</Text>
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

export default Chart;
