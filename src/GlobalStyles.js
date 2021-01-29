import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    display: flex;
    width: 100%;
    height: 100%;
  }

  button,
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
