import React from 'react';
import { View, StyleSheet } from 'react-native';
import MuiVideoPlayer from '../components/MuiVideoPlayer';
import AudioPlayer from '../components/AudioPlayer';
import { StackScreenProps } from '@react-navigation/stack';

// 定義導航參數型別
type RootStackParamList = {
  Home: undefined;
  Player: { type: 'video' | 'audio' }; // 明確限定參數
};

// 定義頁面的 Props 型別
type PlayerScreenProps = StackScreenProps<RootStackParamList, 'Player'>;

const PlayerScreen: React.FC<PlayerScreenProps> = ({ route }) => {
  
  const { type } = route.params; // 確保 route.params 存在並型別安全

  return (
    <View style={styles.container}>
      {type === 'video' ? <MuiVideoPlayer /> : <AudioPlayer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default PlayerScreen;
