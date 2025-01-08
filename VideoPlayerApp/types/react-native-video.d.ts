declare module 'react-native-video' {
    import { Component } from 'react';
    import { ViewProps } from 'react-native';
  
    export interface VideoProperties extends ViewProps {
      source: { uri: string } | number;
      resizeMode?: 'cover' | 'contain' | 'stretch' | 'none';
      onBuffer?: () => void;
      onError?: (error: any) => void;
      onEnd?: () => void;
      onLoad?: () => void;
      onProgress?: (data: { currentTime: number; playableDuration: number }) => void;
      paused?: boolean;
      repeat?: boolean;
      style?: any;
    }
  
    export default class Video extends Component<VideoProperties> {}
  }
  