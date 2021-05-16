import { Box } from 'components';
import React from 'react';

export default function Main({ children, ...props }) {
  return (
    <Box
      as="main"
      css={`
        padding: 0 1rem;
      `}
      {...props}
    >
      {children}
    </Box>
  );
}
