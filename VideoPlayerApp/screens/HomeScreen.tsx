import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// 定義導航參數型別
type RootStackParamList = {
    Home: undefined;
    Player: { type: 'video' | 'audio' }; // Player 頁面接受 type 參數
  };

// 定義頁面的 Props 型別
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>歡迎使用影音播放器</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Player', { type: 'video' })}
      >
        <Text style={styles.buttonText}>播放視頻</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Player', { type: 'audio' })}
      >
        <Text style={styles.buttonText}>播放音頻</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
