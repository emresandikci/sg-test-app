import React, { createContext, useState, useContext } from 'react';
import { Box } from 'components';

import { SettingButton, BackgroundSetting, ColorSetting, FontSizeSetting } from './subComponent';

const initialState = {
  isActive: true,
  setIsActive: Function,
};

const Context = createContext(initialState);

const Provider = ({ children }) => {
  const [isActive, setIsActive] = useState(initialState.isActive);

  return <Context.Provider value={{ isActive, setIsActive }}>{children}</Context.Provider>;
};

export default function ThemeSetting({ theme, setColor, setMode, setFontSize, modes, mode }) {
  const { isActive } = useContext(Context);
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

ThemeSetting.Provider = Provider;
ThemeSetting.Context = Context;
