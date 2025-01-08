//App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';

// 定義導航參數型別
type RootStackParamList = {
  Home: undefined;
  Player: { type: 'video' | 'audio' };
};

// 創建導航堆疊
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      {/* 確保 Stack.Navigator 是 NavigationContainer 的子組件 */}
      <Stack.Navigator initialRouteName="Home">
        {/* 確保每個 Stack.Screen 都是 Stack.Navigator 的子組件 */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
