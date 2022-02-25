export interface Theme {
  colors: {
    font: { main: string };
    background: {
      main: string;
      secondary: string;
      tertiary: string;
    };
  };
  spaces: {
    sides: number;
    button: {
      sm: number;
    };
  };
  dimensions: {
    font: {
      sm: number;
    };
    border: {
      main: number;
    };
  };
  shadow: {
    main: {
      shadowOffset: {
        width: number;
        height: number;
      };
      shadowOpacity: number;
      shadowRadius: number;
    };
  };
}

export { default as light } from './light';
export { default as dark } from './dark';
