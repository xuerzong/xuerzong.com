import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme';

export const useTheme = () => useContext(ThemeContext);
