import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { bounceAnimation } from "../utils/animations";

const BouncyButton = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = bounceAnimation(0.9); // 按下時縮放
  };

  const handlePressOut = () => {
    scale.value = bounceAnimation(1); // 放開時恢復
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style={[styles.button]}
    >
      <Animated.Text style={[styles.text, animatedStyle]}>{title}</Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BouncyButton;
