import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number; // 進度百分比 (0 - 100)
  height?: number; // 進度條高度
  backgroundColor?: string; // 進度條顏色
  borderColor?: string; // 外框顏色
  borderRadius?: number; // 圓角程度
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 10,
  backgroundColor = '#4caf50',
  borderColor = '#ddd',
  borderRadius = 5,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100); // 確保進度在 0-100 範圍內

  return (
    <View
      style={[
        styles.container,
        {
          height,
          borderColor,
          borderRadius,
        },
      ]}
    >
      <View
        style={[
          styles.progressBar,
          {
            width: `${clampedProgress}%`,
            backgroundColor,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
});

export default ProgressBar;
