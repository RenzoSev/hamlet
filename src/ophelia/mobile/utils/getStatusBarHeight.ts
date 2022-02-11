import Constants from 'expo-constants';
import { Platform, Dimensions } from 'react-native';
import { useHeaderHeight } from 'react-navigation-stack';

function getStatusBarHeight() {
  return useHeaderHeight();
}

export default getStatusBarHeight;
