import { createContext, useEffect, useState } from 'react';
import { tuple } from '@/utils/type';

interface ThemeContextInterface {
  changeDarkMode: () => void;
}

const themeMode = tuple('DARK', 'LIGHT');
type ThemeMode = typeof themeMode[number];

const themeModeMap: Record<ThemeMode, string> = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

export const ThemeContext = createContext<ThemeContextInterface>({
  changeDarkMode: () => {},
});

export const DARK_MODE_KEY = 'XUERZONG_DARK_MODE_KEY';

export const ThemeProvider: React.FC = ({ children }) => {
  const [darkModeState, setDarkModeState] = useState<boolean>(false);
  const handleChangeMode = () => {
    if (darkModeState) {
      handleChangeToLightMode();
    } else {
      handleChangeToDarkMode();
    }
  };

  useEffect(() => {
    const initDarkMode = () => {
      let curDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const localDarkMode = sessionStorage.getItem(DARK_MODE_KEY);
      if (localDarkMode === themeModeMap.DARK) {
        handleChangeToDarkMode();
      } else if (localDarkMode === themeModeMap.LIGHT) {
        handleChangeToLightMode();
      } else if (curDarkMode) {
        handleChangeToDarkMode();
      } else {
        handleChangeToLightMode();
      }
    };

    initDarkMode();
  }, []);

  const handleChangeToLightMode = () => {
    setDarkModeState(false);
    sessionStorage.setItem(DARK_MODE_KEY, themeModeMap.LIGHT);
    document.documentElement.classList.remove('dark');
  };

  const handleChangeToDarkMode = () => {
    setDarkModeState(true);
    sessionStorage.setItem(DARK_MODE_KEY, themeModeMap.DARK);
    document.documentElement.classList.add('dark');
  };

  return (
    <ThemeContext.Provider
      value={{
        changeDarkMode: handleChangeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
