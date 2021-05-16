import { useState, useEffect } from 'react';
import { theme as defaultTheme } from 'utils';

const modes = {
  LIGHT: 'light',
  DARK: 'dark',
  WARM: 'warm',
};
export default function useTheme() {
  const currentTheme = getSavedTheme();
  const [theme, setTheme] = useState(
    currentTheme
      ? { ...currentTheme, ...currentTheme.mode[currentTheme.currentMode] }
      : { ...defaultTheme, ...defaultTheme.mode[modes.LIGHT] }
  );
  const [mode, setMode] = useState(currentTheme?.currentMode || modes.LIGHT);
  const [color, setColor] = useState(currentTheme?.color || defaultTheme.color);
  const [fontSize, setFontSize] = useState(currentTheme?.fontSize || defaultTheme.fontSize);

  useEffect(() => {
    if (currentTheme) {
      setTheme({ ...currentTheme, ...currentTheme.mode[currentTheme.currentMode] });
    } else {
      setTheme({ ...defaultTheme, ...defaultTheme.mode[modes.LIGHT] });
    }
  }, []);

  useEffect(() => {
    setTheme({ ...theme, ...theme.mode[mode], currentMode: mode });
  }, [mode]);

  useEffect(() => {
    setTheme({ ...theme, ...theme.mode[mode], color });
  }, [color]);

  useEffect(() => {
    setTheme({ ...theme, ...theme.mode[mode], fontSize });
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return {
    theme,
    setTheme,
    mode,
    setMode,
    color,
    setColor,
    fontSize,
    setFontSize,
    modes,
  };
}

const getSavedTheme = () => {
  const theme = localStorage.getItem('theme');
  return theme ? JSON.parse(theme) : null;
};
