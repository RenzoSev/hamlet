import getStatusBarHeight from 'ophelia/mobile/utils/getStatusBarHeight';
import { StyleSheet } from 'react-native';

interface HeaderStyle {
  height: number;
}

const getStyles = (style: HeaderStyle) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'red',
      height: style.height,
      width: '100%',
      paddingLeft: 16,
      paddingRight: 16,
    },
    containerInformations: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default getStyles;
