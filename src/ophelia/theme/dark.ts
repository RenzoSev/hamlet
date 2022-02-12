import defaultTheme from './default';
import { Theme } from './';

const dark: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      main: '#050003',
      secundary: '#000F25',
      terciary: '#134465',
    },
  },
};

export default dark;
