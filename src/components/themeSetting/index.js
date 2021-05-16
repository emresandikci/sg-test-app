import React, { createContext, useState, useContext, useEffect } from 'react';
import { Box } from 'components';
import { theme as defaultTheme } from 'utils';
import { SettingButton, BackgroundSetting, ColorSetting, FontSizeSetting } from './subComponent';

const modes = {
  LIGHT: 'light',
  DARK: 'dark',
  WARM: 'warm',
};
const initialState = {
  isActive: true,
  setIsActive: Function,
  theme: { ...defaultTheme },
  setColor: Function,
  setMode: Function,
  setFontSize: Function,
  modes: { ...modes },
  mode: 'light',
};

const Context = createContext(initialState);

const Provider = ({ children }) => {
  const [isActive, setIsActive] = useState(initialState.isActive);
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

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
        theme,
        setTheme,
        mode,
        setMode,
        color,
        setColor,
        fontSize,
        setFontSize,
        modes,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default function ThemeSetting() {
  const { theme, setColor, setMode, setFontSize, modes, mode, isActive } = useContext(Context);

  return (
    <Box>
      <Box
        css={`
          display: ${isActive ? 'block' : 'none'};
          width: 300px;
          height: auto;
          position: fixed;
          right: 25px;
          bottom: 80px;
          padding: 1rem;
          border: ${({ theme }) => theme.radius.default};
          box-shadow: ${({ theme }) => theme.shadows.card};
          background-color: ${({ theme }) => theme.background};
          color: ${({ theme }) => theme.fontColor};
        `}
      >
        <Box
          as="h3"
          css={`
            text-align: center;
            margin-bottom: 10px;
          `}
        >
          Customize your view
        </Box>
        <FontSizeSetting setFontSize={setFontSize} theme={theme} />
        <ColorSetting theme={theme} mode={mode} setColor={setColor} modes={modes} />
        <BackgroundSetting theme={theme} mode={mode} setMode={setMode} modes={modes} />
      </Box>
      <SettingButton />
    </Box>
  );
}

const getSavedTheme = () => {
  const theme = localStorage.getItem('theme');
  return theme ? JSON.parse(theme) : null;
};

ThemeSetting.Provider = Provider;
ThemeSetting.Context = Context;
