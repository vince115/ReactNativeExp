// utils/parseQRCode.ts       # QR Code 解析工具

export const parseQRCode = (data: string) => {
    try {
      const isURL = data.startsWith('http');
      return isURL ? { type: 'url', value: data } : { type: 'text', value: data };
    } catch (err) {
      return { type: 'unknown', value: data };
    }
  };
  