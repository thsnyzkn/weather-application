import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

const GlobalStyles = createGlobalStyle`
${normalize}
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
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  line-height: ${({ theme }) => theme.lineHeights.body};
}

`;

export default GlobalStyles;
