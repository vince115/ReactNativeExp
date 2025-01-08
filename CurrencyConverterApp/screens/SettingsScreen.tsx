// SettingsScreen.tsx
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';
import CurrencyPicker from '../components/CurrencyPicker';
import { CurrencyOption } from '../utils/types';

const currencyOptions: CurrencyOption[] = [
  { label: 'US Dollar (USD)', value: 'USD' },
  { label: 'Euro (EUR)', value: 'EUR' },
  { label: 'Japanese Yen (JPY)', value: 'JPY' },
  { label: 'British Pound (GBP)', value: 'GBP' },
];

const SettingsScreen: React.FC = () => {
  const [defaultCurrency, setDefaultCurrency] = useState<string>('USD'); // 預設貨幣
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // 是否啟用深色模式

  const handleCurrencyChange = (currency: string) => {
    setDefaultCurrency(currency);
    Alert.alert('Default Currency Updated', `Your default currency is now set to ${currency}.`);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    Alert.alert('Theme Updated', `The app is now in ${isDarkMode ? 'Light' : 'Dark'} mode.`);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Settings</Text>
      <View style={styles.section}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Default Currency:</Text>
        <CurrencyPicker
          selectedCurrency={defaultCurrency}
          onCurrencyChange={handleCurrencyChange}
          currencyOptions={currencyOptions}
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Dark Mode:</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#ccc', true: '#444' }}
          thumbColor={isDarkMode ? '#fff' : '#000'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  section: {
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SettingsScreen;
