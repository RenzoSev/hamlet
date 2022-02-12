import defaultTheme from './default';
import { Theme } from './';

const light: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      main: '#feeacc',
      secundary: '#190117',
      terciary: '#490912',
    },
  },
};

export default light;
