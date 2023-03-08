import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    background: #242424;
    color: rgba(255, 255, 255, 0.87);

    font-size: 14px;
    font-family: sans-serif;
  }
`;