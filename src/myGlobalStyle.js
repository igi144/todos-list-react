import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *::after, ::before {
      box-sizing: inherit;
    }

    body {
      display: flex;
      flex-direction: column;
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
      background-color: #eee;
      word-break: break-word;
      padding: 10px;
      max-width: 1000px;
      margin: 0 auto;
};
`
