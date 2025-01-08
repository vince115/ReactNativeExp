// # 主畫面
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CurrencyPicker from '../components/CurrencyPicker';
import Loader from '../components/Loader';
import ExchangeRateDisplay from '../components/ExchangeRateDisplay';
import { fetchExchangeRates } from '../utils/api';

const currencyOptions = [
  { label: 'US Dollar (USD)', value: 'USD' },
  { label: 'Euro (EUR)', value: 'EUR' },
  { label: 'Japanese Yen (JPY)', value: 'JPY' },
];

const HomeScreen: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const [targetCurrency, setTargetCurrency] = useState<string>('EUR');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [amount, setAmount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getExchangeRate = async () => {
      setIsLoading(true); // 顯示加載動畫
      try {
        const data = await fetchExchangeRates(baseCurrency);
        setExchangeRate(data.rates[targetCurrency]);
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        setExchangeRate(null);
      } finally {
        setIsLoading(false); // 隱藏加載動畫
      }
    };

    getExchangeRate();
  }, [baseCurrency, targetCurrency]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        value={amount.toString()}
        onChangeText={(text) => setAmount(parseFloat(text) || 0)}
      />
      <CurrencyPicker
        selectedCurrency={baseCurrency}
        onCurrencyChange={(currency) => setBaseCurrency(currency)}
        currencyOptions={currencyOptions}
      />
      <CurrencyPicker
        selectedCurrency={targetCurrency}
        onCurrencyChange={(currency) => setTargetCurrency(currency)}
        currencyOptions={currencyOptions}
      />
      {isLoading ? (
        <Loader message="Fetching exchange rates..." />
      ) : (
        <ExchangeRateDisplay
          baseCurrency={baseCurrency}
          targetCurrency={targetCurrency}
          exchangeRate={exchangeRate}
          amount={amount}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;