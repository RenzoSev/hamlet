import { useContext } from 'react';
import { ThemeContext } from '../theme/store/ThemeProvider';

export default function useTheme() {
  const value = useContext(ThemeContext);
  return value;
}
