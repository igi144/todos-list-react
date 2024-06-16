import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
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
  padding: 10px;
      
`
export const NavWrapper = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
padding: 20px;
background-color: teal;
list-style-type: none;
font-size: 20px;

`

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active"
}))`
&.active{
  font-weight: bold;
  
}
color: white;
text-decoration: 'none'
`

