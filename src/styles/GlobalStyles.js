import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::after,*::before {
  box-sizing: border-box;
}
body {

  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh;
  width:100vw;
  background-color: #262A59;
  
}

`;

export default GlobalStyles;
