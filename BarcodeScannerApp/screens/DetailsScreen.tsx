import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types'; // 確保這裡的路徑正確

type Props = StackScreenProps<RootStackParamList, 'Details'>; // 為 DetailsScreen 定義參數類型

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Received ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
