import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

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
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;

      div{
        padding: 10px
      }
};
`

export const Wrapper = styled.ul`
padding: 20px;



background-color: teal;
list-style-type: none;
font-size: 20px;
&:active{
  font-weight: bold;
}
`
