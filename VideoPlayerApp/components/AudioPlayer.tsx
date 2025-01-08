//components/AudioPlayer.tsx //音頻播放器元件
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Controls from './Controls';

const AudioPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 加載音頻
  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      );
      setSound(sound);
    };

    loadAudio();

    return () => {
        if (sound) {
      sound?.unloadAsync(); // 卸載音頻
    }
    };
  }, []);

  // 切換播放狀態
  const togglePlayback = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      
       // 使用類型守衛檢查成功狀態  
        if (status.isLoaded && 'isPlaying' in status) {  
            if (status.isPlaying) {
                await sound.pauseAsync();
                setIsPlaying(false);
            } else {
                await sound.playAsync();
                setIsPlaying(true);
            }
        }else{
            console.error('音頻未加載或出錯');
        }    
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>音頻播放器</Text>
      <Controls onPlayPause={togglePlayback} isPlaying={isPlaying} />

      <TouchableOpacity onPress={togglePlayback} style={styles.button}>
        <Text style={styles.buttonText}>{isPlaying ? '暫停' : '播放'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AudioPlayer;
