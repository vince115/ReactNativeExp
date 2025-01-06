import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const StepCounter = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [steps, setSteps] = useState<number>(0);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Accelerometer.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    requestPermission();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>需要授權感測器權限才能啟用計步功能。</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.steps}>步數：{steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
  },
  steps: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default StepCounter;