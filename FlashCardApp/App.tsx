import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // 導航容器
import { Provider } from "react-redux"; // Redux Provider
import store from "./src/redux/store"; // Redux 的 store
import AppNavigator from "./src/navigation/AppNavigator"; // 主導航設置
import { StatusBar } from "expo-status-bar"; // Expo 狀態欄

export default function App() {
  return (
    // Redux Provider，讓整個應用可以訪問 Redux 狀態
    <Provider store={store}>
      {/* 導航容器，處理應用的導航邏輯 */}
      <NavigationContainer>
        {/* 主應用的導航邏輯 */}
        <AppNavigator />
        {/* 自動適配的狀態欄 */}
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
