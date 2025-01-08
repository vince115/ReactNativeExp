// screens/ScanScreen.tsx       # 條碼掃描頁

import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import CameraScanner from '../components/CameraScanner'; // 引入自定義的相機掃描元件

export default function ScanScreen() {
  const [scanned, setScanned] = useState(false);

  const handleScan = (data: string) => {
    console.log('Scanned data:', data); // 在控制台打印掃描結果
  };


  return (
    <View style={styles.container}>
        <CameraScanner onScan={handleScan} scanned={scanned} setScanned={setScanned} />
      {/* <CameraScanner onScan={handleScan} scanned={scanned} />
      {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
