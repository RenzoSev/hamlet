export interface Theme {
  colors: {
    font: { main: string };
    background: {
      main: string;
      secundary: string;
      terciary: string;
    };
  };
  spaces: {
    sides: number;
  };
  dimensions: {
    font: {
      sm: number;
    };
  };
}

export { default as light } from './light';
export { default as dark } from './dark';
