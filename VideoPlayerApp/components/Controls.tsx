// components/Controls.tsx //播放控制元件
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Controls = ({ onPlayPause, isPlaying }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlayPause} style={styles.button}>
        <Text style={styles.buttonText}>{isPlaying ? '暫停' : '播放'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Controls;
