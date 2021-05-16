import React from 'react';
import { Box } from 'components';

function Card({ children, width, ...props }) {
  return (
    <Box
      width={width}
      css={`
        border-radius: ${({ theme }) => theme.radius.default};
        background: ${({ theme }) => theme.color};
        padding: 1rem;
      `}
      {...props}
    >
      {children}
    </Box>
  );
}

Card.defaultProps = {
  width: 1 / 2,
};

export default Card;
