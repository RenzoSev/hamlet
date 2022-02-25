import defaultTheme from './default';
import { Theme } from './';

const dark: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      main: '#050003',
      secondary: '#000F25',
      tertiary: '#134465',
    },
  },
};

export default dark;
