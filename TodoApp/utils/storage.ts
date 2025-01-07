import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/task';

/**
 * 保存任務到 AsyncStorage
 * @param tasks 任務列表
 */
// 將任務列表轉為 JSON 格式後存入 AsyncStorage
export const saveTasks = async (tasks: Task[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem('tasks', jsonValue);
  } catch (error) {
    console.error('Failed to save tasks:', error);
  }
};

/**
 * 從 AsyncStorage 加載任務
 * @returns 任務列表
 */
// 從 AsyncStorage 讀取任務並轉換為物件
export const loadTasks = async (): Promise<Task[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem('tasks');
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Failed to load tasks:', error);
    return [];
  }
};

/**
 * 清除所有任務
 */
// 清除 AsyncStorage 中所有任務資料
export const clearTasks = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('tasks');
  } catch (error) {
    console.error('Failed to clear tasks:', error);
  }
};
