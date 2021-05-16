import React from 'react';
import { Box } from 'components';

export default function Header() {
  return (
    <Box
      as="header"
      css={`
        padding: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors?.lightGray};
      `}
    >
      <Box
        as="h3"
        css={`
          font-weight: ${({ theme }) => theme.fontWeights?.bold};
        `}
      >
        SG Test APP
      </Box>
    </Box>
  );
}
