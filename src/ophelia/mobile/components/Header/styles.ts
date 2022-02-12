import getStatusBarHeight from 'ophelia/mobile/utils/getStatusBarHeight';
import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme';

interface HeaderStyle {}

const getStyles = (theme: Theme, style: HeaderStyle = {}) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.secundary,
      height: getStatusBarHeight(),
      width: '100%',
      paddingLeft: theme.spaces.sides,
      paddingRight: theme.spaces.sides,
    },
    containerInformations: {
      alignItems: 'flex-end',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 14,
    },
    textPage: {
      fontSize: theme.dimensions.font.sm,
      color: theme.colors.font.main,
    },
  });

export default getStyles;
