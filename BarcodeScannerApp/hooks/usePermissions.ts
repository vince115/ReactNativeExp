// hooks/usePermissions.ts    # 處理設備權限

import { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';

export const usePermissions = () => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return hasPermission;
};
