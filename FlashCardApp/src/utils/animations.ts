import { Easing, withSpring, withTiming } from "react-native-reanimated";

/**
 * 卡片翻轉動畫
 * @param flipValue - 當前的翻轉值 (0 或 180)
 * @returns 下一個翻轉值
 */
export const flipAnimation = (flipValue: number) => {
  return withSpring(flipValue === 0 ? 180 : 0, {
    damping: 10, // 控制彈性效果
    stiffness: 90, // 控制彈跳力度
  });
};

/**
 * 淡入動畫
 * @returns Timing 配置的動畫值
 */
export const fadeInAnimation = () => {
  return withTiming(1, {
    duration: 500,
    easing: Easing.inOut(Easing.ease), // 緩入緩出的效果
  });
};

/**
 * 淡出動畫
 * @returns Timing 配置的動畫值
 */
export const fadeOutAnimation = () => {
  return withTiming(0, {
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  });
};

/**
 * 縮放動畫
 * @param fromScale - 初始縮放值
 * @param toScale - 目標縮放值
 * @returns Timing 配置的動畫值
 */
export const scaleAnimation = (fromScale: number, toScale: number) => {
  return withTiming(toScale, {
    duration: 300,
    easing: Easing.out(Easing.quad), // 快速縮放效果
  });
};

/**
 * 自定義彈跳動畫
 * @param value - 當前值
 * @returns Spring 配置的動畫值
 */
export const bounceAnimation = (value: number) => {
  return withSpring(value, {
    damping: 5,
    stiffness: 150,
    mass: 1,
  });
};
