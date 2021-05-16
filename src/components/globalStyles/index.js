import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family:${({ theme }) => theme.fonts?.default}; 
    font-size:${({ theme }) => theme.fontSize}px;
    background-color:${({ theme }) => theme.background}};
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding:0;
    border:0;
    color:${({ theme }) => theme.fontColor}};
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style: none;
  }
`;

export default GlobalStyles;
