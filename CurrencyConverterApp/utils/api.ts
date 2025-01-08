// # 匯率 API 呼叫邏輯
import axios from 'axios';
import { ExchangeRate } from './types';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/';

export const fetchExchangeRates = async (baseCurrency: string): Promise<ExchangeRate> => {
  const response = await axios.get(`${BASE_URL}${baseCurrency}`);
  return response.data;
};
