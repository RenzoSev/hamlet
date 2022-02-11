import getStatusBarHeight from 'ophelia/mobile/utils/getStatusBarHeight';
import { StyleSheet } from 'react-native';

interface HeaderStyle {}

const getStyles = (style: HeaderStyle) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'red',
      height: getStatusBarHeight(),
      width: '100%',
      paddingLeft: 16,
      paddingRight: 16,
    },
    containerInformations: {
      alignItems: 'flex-end',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 14
    },
    textPage: {
      fontSize: 16
    }
  });

export default getStyles;
