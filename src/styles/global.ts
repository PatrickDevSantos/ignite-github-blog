import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: ${(props) => props.theme['blue']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blue};
  }

  body {    
    min-height: 100vh;
    background: ${(props) => props.theme['base-background']};
    background-image: url('../src/assets/cover.png');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% 296px;
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }

  .wrapper{
    max-width: 1180px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
`
