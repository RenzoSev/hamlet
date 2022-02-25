import defaultTheme from './default';
import { Theme } from './';

const light: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      main: '#feeacc',
      secondary: '#190117',
      tertiary: '#490912',
    },
  },
};

export default light;
