import { useState, useEffect } from 'react';

const DARK_MODE_KEY = 'XUERZONG_DARK_MODE_KEY';

export const DarkBtn = () => {
  const [darkModeState, setDarkModeState] = useState<boolean>(false);

  const handleChangeMode = () => {
    if (darkModeState) {
      setDarkModeState(false);
      sessionStorage.removeItem(DARK_MODE_KEY);
    } else {
      setDarkModeState(true);
      sessionStorage.setItem(DARK_MODE_KEY, DARK_MODE_KEY);
    }
  };

  useEffect(() => {
    setDarkModeState(
      !!sessionStorage.getItem(DARK_MODE_KEY) ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }, []);

  useEffect(() => {
    if (darkModeState) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkModeState]);

  return (
    <span className="hover:-rotate-45 transition-transform duration-300 cursor-pointer">
      <i className="gg-sun" onClick={handleChangeMode} />
    </span>
  );
};
