import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    line-height: ${({ theme }) => theme.lineHeights.text}px;
    font-family:${({ theme }) => theme.fonts.default};
    
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding:0;
    border:0;
    font:inherit;
    font-size:${({ theme }) => theme.fontSizes.normal}px;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style: none;
  }
`;

export default GlobalStyles;
