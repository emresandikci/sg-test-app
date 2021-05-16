import React from 'react';
import { Box, Select } from 'components';

export default function Attribute({ attrList, attrs, ...props }) {
  return (
    <Box>
      <Select width={1 / 2} value={attrs} {...props}>
        {attrList?.map((item, i) => (
          <option value={item} key={item + i}>
            {item}
          </option>
        ))}
      </Select>
    </Box>
  );
}
