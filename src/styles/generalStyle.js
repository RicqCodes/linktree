import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


html {
    
    font-size: 62.5%;

    @media (max-width: 55em) {
        font-size: 60%;
    }

    @media (max-width: 59em) {
        font-size: 50%;
    }
    
    @media (max-width: 34.6em) {
        font-size: 48%;
  }    
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
        /* width: 100%;
        height: 100%; */
        -moz-osx-font-smoothing: inherit;
    }

    a {
        text-decoration: none;
    }
`;
