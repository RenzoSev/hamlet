import { StyleSheet } from 'react-native';
import { Theme } from '../../../theme';

interface ContainerStyle {}

const getStyles = (theme: Theme, style: ContainerStyle = {}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.main,
      paddingLeft: theme.spaces.sides,
      paddingRight: theme.spaces.sides,
    },
  });

export default getStyles;
