import React from 'react';
import { Box } from 'components';
import ColorBox from '../colorBox';

export default function BackgroundSetting({ theme, setMode, mode, modes }) {
  return (
    <Box>
      <Box as="p">Background:</Box>
      <Box
        css={`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        `}
      >
        <ColorBox
          color={theme.mode[modes.LIGHT].background}
          onClick={() => setMode(modes.LIGHT)}
          isCurrent={modes.LIGHT === mode}
          iconColor={theme.colors.black}
        />
        <ColorBox
          color={theme.mode[modes.WARM].background}
          onClick={() => setMode(modes.WARM)}
          isCurrent={modes.WARM === mode}
          iconColor={theme.colors.white}
        />
        <ColorBox
          color={theme.mode[modes.DARK].background}
          onClick={() => setMode(modes.DARK)}
          isCurrent={modes.DARK === mode}
          iconColor={theme.colors.white}
        />
      </Box>
    </Box>
  );
}
