import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::after,*::before {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,body {
  height: 100%;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #262A59;
  line-height: 1.5;
}

`;

export default GlobalStyles;
