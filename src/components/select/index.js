import styled from 'styled-components';

import BaseElement from '../baseElement';

const Select = styled(BaseElement).attrs({
  as: 'select',
})`
  /* appearance: none; */
  outline: none;
  user-select: none;
  cursor: pointer;
  padding: 0;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${({ theme }) => theme.color};
  color: #fff;
  &:hover {
    background-color: ${({ theme }) => theme.color};
  }
  &:active {
    background-color: ${({ theme }) => theme.color};
  }
  &:disabled {
    cursor: not-allowed;
    user-select: none;
    background-color: ${({ theme }) => theme.color};
  }
`;

export default Select;
