import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StepCounter from './src/features/stepCounter/stepCounter';

export default function App() {
  return (
    <View style={styles.container}>
    {/* 狀態列樣式 */}
    <StatusBar style="dark" />
    {/* 計步器 */}
    <StepCounter />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50, // 可選：為畫面提供額外間距
  },
});



