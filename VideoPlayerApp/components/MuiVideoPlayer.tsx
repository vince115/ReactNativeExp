import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { IconButton, ProgressBar, Text } from 'react-native-paper';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

const MuiVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 進度條百分比
  const videoRef = useRef<Video>(null);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProgress = (data: { currentTime: number; playableDuration: number }) => {
    const progress = data.currentTime / data.playableDuration;
    setProgress(progress);
  };

  return (
    <View style={styles.container}>
      {/* 視頻區域 */}
      <Video
        ref={videoRef}
        source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        style={styles.video}
        resizeMode="contain"
        paused={!isPlaying}
        onProgress={handleProgress}
        onError={(error) => console.error('Video error:', error)}
      />

      {/* 控制區域 */}
      <View style={styles.controls}>
        <ProgressBar progress={progress} color="#007BFF" style={styles.progress} />
        <View style={styles.buttons}>
          <IconButton
            icon={isPlaying ? 'pause' : 'play'}
            size={30}
            onPress={togglePlayback}
            mode="contained"
          />
          <Text style={styles.time}>
            {Math.round(progress * 100)}% Played
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  video: {
    width: width,
    height: width * 0.6,
  },
  controls: {
    width: '90%',
    padding: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    marginTop: '40%', // 與視頻分隔的間距
  },
  progress: {
    height: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -30, 
  },
  time: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MuiVideoPlayer;
