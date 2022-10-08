import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  font-family: 'IRANSans';
}

body {
    direction: rtl;
  margin: 0;
  font-family: 'IRANSans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.BgColors.body};
}

code {
  font-family: IranianSans;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

@font-face {
  font-family: 'IRANSans';
  src: local('IRANSans'),
   url("./font/Iranian-Sans.ttf") format("truetype");
  font-weight: normal;
  }
  
  `;
