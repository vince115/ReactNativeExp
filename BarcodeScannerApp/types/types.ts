//types/types.ts
export type RootStackParamList = {
    Home: undefined; // HomeScreen 不需要參數
    Scan: undefined; // ScanScreen 不需要參數
    Details: { id: string }; // 示例：DetailsScreen 接收一個參數
  };