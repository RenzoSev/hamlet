import Constants from 'expo-constants';
import { Platform } from 'react-native';

function getStatusBarHeight() {
  const heights = {
    android: getAndroidHeight(),
    ios: getIOSHeight(),
  };

  const deviceHeight = Platform.OS as keyof typeof heights;

  return heights[deviceHeight] || 0;
}

function getAndroidHeight() {
  return Constants.statusBarHeight + 50;
}

function getIOSHeight() {
  return 20;
}

export default getStatusBarHeight;
