import React from 'react';
import { Box, Input } from 'components';

export default function FontSizeSetting({ theme, setFontSize }) {
  return (
    <Box>
      <Box
        as="p"
        css={`
          margin: 10px 0;
        `}
      >
        Font Size:
      </Box>
      <Box>
        <Input
          type="number"
          css={`
            color: ${({ theme }) => theme.colors.black};
          `}
          width={1}
          min={14}
          max={20}
          step={2}
          value={theme.fontSize}
          onChange={({ target: { value } }) => setFontSize(value)}
        />
      </Box>
    </Box>
  );
}
