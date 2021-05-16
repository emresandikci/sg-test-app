import styled from 'styled-components';
import { responsiveCalc } from 'utils';

const BaseElement = styled.div.attrs({ css: `` })`
  box-sizing: border-box;
  width: ${({ width }) => responsiveCalc(width)};
`;

export default BaseElement;
