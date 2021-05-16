import React from 'react';
import { Box } from 'components';
import CheckIcon from '../checkIcon';

export default function ColorBox({ color, children, onClick, iconColor, isCurrent, ...props }) {
  return (
    <Box
      css={`
        height: 50px;
        width: 50px;
        border-radius: ${({ theme: { radius } }) => radius.full};
        background-color: ${color};
        cursor: pointer;
        border: 1px solid gray;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${iconColor};
      `}
      onClick={onClick}
      {...props}
    >
      {isCurrent && <CheckIcon color={iconColor} />}
      {children}
    </Box>
  );
}
