import styled from 'styled-components';

import BaseElement from '../baseElement';

const Input = styled(BaseElement).attrs({
  as: 'input',
})`
  appearance: none;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: ${({ theme }) => theme.radius.input};
  text-align: center;
  padding: calc(1rem / 4);
  font-size: 1rem;
`;

Input.defaultProps = {
  width: null,
};

export default Input;
