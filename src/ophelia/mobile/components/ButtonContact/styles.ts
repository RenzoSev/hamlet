import { Theme } from 'ophelia/theme';
import { StyleSheet } from 'react-native';

interface ButtonContactStyle {}

const getStyles = (theme?: Theme, style?: ButtonContactStyle) =>
  StyleSheet.create({
    container: {
      marginRight: 12,
    },
  });

export default getStyles;
