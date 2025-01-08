import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Controls from './Controls';

const { width, height } = Dimensions.get('window'); // 獲取設備螢幕的寬高

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        style={styles.video}
        resizeMode="contain"
        paused={!isPlaying} // 透過 `paused` 控制播放/暫停
        onError={(error) => console.error('Video error:', error)}
      />
      <Controls onPlayPause={togglePlayback} isPlaying={isPlaying} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    
  },
  video: {
    width: width, // 設置全屏寬度
    height: height * 0.6, // 高度設為螢幕高度的 60%，根據需要調整
  },
});

export default VideoPlayer;
