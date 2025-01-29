import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { flipAnimation } from "../utils/animations";

const CardFlip = ({ question, answer }: { question: string; answer: string }) => {
  const flip = useSharedValue(0); // 用於控制翻轉角度

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${flip.value}deg` }],
    opacity: flip.value < 90 ? 1 : 0,
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${flip.value + 180}deg` }],
    opacity: flip.value > 90 ? 1 : 0,
  }));

  const handlePress = () => {
    flip.value = flipAnimation(flip.value); // 使用自定義翻轉動畫
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
    <Animated.View style={[styles.card, frontStyle]}>
      <Text>{question}</Text>
    </Animated.View>
    <Animated.View style={[styles.card, styles.backCard, backStyle]}>
      <Text>{answer}</Text>
    </Animated.View>
  </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    perspective: 1000, // 創建 3D 效果
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  backCard: {
    backgroundColor: '#ffc107',
    transform: [{ rotateY: '180deg' }],
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardFlip;