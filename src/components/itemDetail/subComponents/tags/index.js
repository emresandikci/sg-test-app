import React from 'react';
import { Flex, Box, Button } from 'components';

export default function Tags({ tags }) {
  return (
    <Flex
      css={`
        margin-top: 10px;
        flex-wrap: wrap;
        width: 50%;
      `}
    >
      {tags?.map(({ name }, i) => (
        <Box
          key={i}
          css={`
            margin: 2.5px 0;
            margin-right: ${tags.length - 1 !== i && '5px'};
          `}
        >
          <Button
            variant="outline"
            css={`
              cursor: default;
            `}
          >
            {name}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}
