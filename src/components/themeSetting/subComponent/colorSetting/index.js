import React from 'react';
import { Box } from 'components';
import ColorBox from '../colorBox';

export default function ColorSetting({ theme, setColor }) {
  return (
    <Box>
      <Box
        as="p"
        css={`
          margin: 10px 0;
        `}
      >
        Color:
      </Box>
      <Box
        css={`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        {Object.entries(theme.colors)
          .filter((color) => typeof color[1] !== 'string')
          .map((color, i) => {
            if (typeof color[1] === 'string') return <ColorBox key={i} color={color[1]} />;

            return (
              <ColorBox
                color={color[1].c400}
                key={i}
                onClick={() => setColor(color[1].c400)}
                isCurrent={color[1].c400 === theme.color}
                iconColor={theme.colors.white}
              />
            );
          })}
      </Box>
    </Box>
  );
}
