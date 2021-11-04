import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    
body{
    background-image : ${props =>`url(${props.theme.background}) `}; 
    min-height:100vh;
    height:100%;
    background-repeat: no-repeat;
    background-size:cover;
    text-align: center;
}

`

export default GlobalStyle