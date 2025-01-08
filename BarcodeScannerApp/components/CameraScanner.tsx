// components/CameraScanner.tsx # 相機掃描元件
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera'; //相機組件,指定相機的類型
//import { Camera, CameraType, BarCodeScanningResult } from 'expo-camera'; // 正確導入 Camera 和 CameraType


type CameraScannerProps = {
  onScan: (data: string) => void; // 掃描成功後的回調
  scanned: boolean; // 是否禁用掃描
  setScanned: React.Dispatch<React.SetStateAction<boolean>>; // 控制掃描狀態
};

const CameraScanner: React.FC<CameraScannerProps> = ({ onScan, scanned, setScanned }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
        <Button
          title="Grant Permission"
          onPress={async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
          }}
        />
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    Alert.alert('Scanned Data', data, [{ text: 'OK', onPress: () => setScanned(false) }]);
    onScan(data);
  };

  return (
    <View style={styles.container}>
      {/* <Camera
        style={StyleSheet.absoluteFillObject}
        type="back" // 指定後置相機
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [
            Camera.Constants.BarCodeType.qr,
            Camera.Constants.BarCodeType.ean13,
            Camera.Constants.BarCodeType.upc_a,
          ],
        }}
      /> */}
        <Camera
        style={StyleSheet.absoluteFillObject}
        type={CameraType.back} // 使用 CameraType 指定後置相機
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: ['qr', 'ean13', 'upc_a'], // 指定支持的條碼類型
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default CameraScanner;
