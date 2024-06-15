import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
 body {
  
    background-color: #eee;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`
export const Container = styled.div` 
background-color: #eee;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  word-break: break-word;
  max-width: 1000px;
  margin: 0 auto;
      
`
export const NavWrapper = styled.ul`
grid-template-columns: auto;
justify-content: center;
padding: 20px;
background-color: teal;
list-style-type: none;
font-size: 20px;
&:active{
  font-weight: bold;
}
`