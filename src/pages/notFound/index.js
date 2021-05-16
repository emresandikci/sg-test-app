import React from 'react';
import { notFound404 } from 'public/images/';
import { Flex } from 'components';
export default function NotFound() {
  return (
    <Flex
      css={`
        height: calc(100vh - 55px);
        align-items: center;
        justify-content: center;
      `}
    >
      <img src={notFound404} alt="404" width={window.innerWidth / 2} />
    </Flex>
  );
}
