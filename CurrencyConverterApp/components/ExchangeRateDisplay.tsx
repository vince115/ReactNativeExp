// # 匯率顯示元件
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExchangeRateDisplayProps {
  baseCurrency: string; // 基礎貨幣（如 USD）
  targetCurrency: string; // 目標貨幣（如 EUR）
  exchangeRate: number | null; // 匯率數據（若為 null 表示尚未獲取）
  amount: number; // 用戶輸入的金額
}

const ExchangeRateDisplay: React.FC<ExchangeRateDisplayProps> = ({
  baseCurrency,
  targetCurrency,
  exchangeRate,
  amount,
}) => {
  const convertedAmount = exchangeRate ? (amount * exchangeRate).toFixed(2) : 'N/A';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exchange Rate</Text>
      {exchangeRate ? (
        <View style={styles.resultContainer}>
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${exchangeRate.toFixed(4)} ${targetCurrency}`}
          </Text>
          <Text style={styles.text}>
            {`${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`}
          </Text>
        </View>
      ) : (
        <Text style={styles.errorText}>Unable to fetch exchange rate.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default ExchangeRateDisplay;
