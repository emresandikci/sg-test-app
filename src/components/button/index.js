import styled, { css } from 'styled-components';
import { responsiveCalc } from 'utils';
import BaseElement from '../baseElement';

const Button = styled(BaseElement).attrs({
  as: 'button',
})`
  appearance: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  padding: 0;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;
  color: #fff;
  width: ${({ width }) => responsiveCalc(width)};
  &:disabled {
    cursor: not-allowed;
    user-select: none;
    opacity: 0.4;
  }
  &:hover:enabled {
    opacity: 0.7;
  }
  &:active:enabled {
    opacity: 1;
  }
  ${({ variant }) => {
    switch (variant) {
      case 'outline':
        return css`
          color: ${({ theme }) => theme.color};
          background-color: transparent;
          border: 2px solid ${({ theme }) => theme.color};
          &:hover {
            border: 2px solid ${({ theme }) => theme.color};
          }
          &:active {
            border: 2px solid ${({ theme }) => theme.color};
          }
          &:disabled {
            border: 2px solid ${({ theme }) => theme.color};
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.color};
          &:hover {
            background-color: ${({ theme }) => theme.color};
          }
          &:active {
            background-color: ${({ theme }) => theme.color};
          }
          &:disabled {
            background-color: ${({ theme }) => theme.color};
          }
        `;
    }
  }};
`;

export default Button;
