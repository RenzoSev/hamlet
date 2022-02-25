import { Theme } from 'ophelia/theme';
import { StyleSheet } from 'react-native';

interface ButtonTextIconStyle {}

const getStyles = (theme: Theme, style: ButtonTextIconStyle = {}) =>
  StyleSheet.create({
    container: {
      ...theme.shadow.main,
      alignItems: "center",
      backgroundColor: theme.colors.background.tertiary,
      borderRadius: theme.dimensions.border.main,
      flexDirection: "row",
      justifyContent: "flex-start",
      padding: theme.spaces.button.sm,
      height: 48,
      width: 146,
    },
    text: {
      color: theme.colors.font.main,
      fontSize: theme.dimensions.font.sm,
      fontWeight: 'bold',
      letterSpacing: 1,
      marginLeft: 8,
      textTransform: "uppercase",
    }
  });

export default getStyles;
