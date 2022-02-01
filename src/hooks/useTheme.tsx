import React, { useContext } from 'react';
import { ThemeContext } from '../store/ThemeProvider';

export default function useTheme() {
  const value = useContext(ThemeContext);
  return value;
}
