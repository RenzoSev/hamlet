import React, { createContext, useState } from 'react';
import { dark, light, Theme } from '../';

type ThemeProviderProps = {};

type ThemeContextTypes = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: Theme;
};

export const ThemeContext = createContext({} as ThemeContextTypes);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const selectedTheme = theme === 'light' ? light : dark;

  return (
    <ThemeContext.Provider value={{ setTheme, theme: selectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
