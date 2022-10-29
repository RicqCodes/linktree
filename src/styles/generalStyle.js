import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


html {
        font-size: 62.5%;
    }

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
        color: #101828;
        font: inherit;
        font-family: "Inter",  sans-serif;
        background-color: #fff;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        width: 100%;
        height: 100%;
        -moz-osx-font-smoothing: inherit;
    }

    a {
        text-decoration: none;
    }
`;
