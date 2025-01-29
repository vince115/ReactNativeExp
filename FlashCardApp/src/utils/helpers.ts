/**
 * 生成唯一 ID
 * @returns 唯一字符串 ID
 */
export const generateUniqueId = (): string => {
    return Math.random().toString(36).substr(2, 9); // 基於隨機數的唯一 ID
  };
  
  /**
   * 隨機排序數組
   * @param array - 原始數組
   * @returns 打亂順序的新數組
   */
  export const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  /**
   * 格式化字符串（例如首字母大寫）
   * @param str - 輸入字符串
   * @returns 格式化後的字符串
   */
  export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  /**
   * 延遲函數 (模擬等待)
   * @param ms - 延遲的毫秒數
   * @returns Promise
   */
  export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  
  /**
   * 檢查字符串是否為空
   * @param str - 要檢查的字符串
   * @returns 如果字符串為空或只包含空格，返回 true
   */
  export const isEmpty = (str: string): boolean => {
    return !str || str.trim().length === 0;
  };
  