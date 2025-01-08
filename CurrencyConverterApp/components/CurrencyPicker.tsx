import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CurrencyOption } from '../utils/types';

interface CurrencyPickerProps {
  selectedCurrency: string; // 當前選中的貨幣
  onCurrencyChange: (currency: string) => void; // 當貨幣更改時的回調函式
  currencyOptions: CurrencyOption[]; // 貨幣選項清單
}

const CurrencyPicker: React.FC<CurrencyPickerProps> = ({
  selectedCurrency,
  onCurrencyChange,
  currencyOptions,
}) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) => onCurrencyChange(itemValue)}
        style={styles.picker}
      >
        {currencyOptions.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  picker: {
    height: 50,
    fontSize: 16,
  },
});

export default CurrencyPicker;
