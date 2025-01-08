// # 定義共用型別
export interface ExchangeRate {
    base: string;
    rates: Record<string, number>;
  }
  
  export interface CurrencyOption {
    label: string; // 貨幣名稱（顯示給用戶）
    value: string; // 貨幣代碼（例如 USD、EUR）
  }