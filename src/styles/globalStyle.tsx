import { createGlobalStyle } from "styled-components";
import { link, hover } from "./mixins";

const GlobalStyle = createGlobalStyle`
  :root {
    --grey-50: #F0F4F8;
    --grey-100: #D9E2EC;
    --grey-200: #BCCCDC;
    --grey-300: #9FB3C8;
    --grey-400: #829AB1;
    --grey-500: #627D98;
    --blue: #102A43;
    --tan: #F0F3BD;
    --tan-tint: #909271;

    --border-radius: 4px;
    --navbar-height: 100px;

    --font-sans: "Roboto", sans-serif;
    --font-mono: "Roboto Mono", monospace;

    --font-xxs: 12px;
    --font-xs: 13px;
    --font-sm: 14px;
    --font-md: 16px;
    --font-lg: 18px;
    --font-xl: 20px;
    --font-xxl: 22px;
    --font-heading: 32px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0px;
    width: 100%;
    min-height: 100%;
    font-family: var(--font-sans);
    color: var(--grey-50);
    padding: 0px;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--blue);
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
  p {
    a {
      color: var(--tan);
    }
    ${link}
  }

  a {
    color: var(--grey-50);
    text-decoration: none;
    ${hover}
  }
  
`;

export default GlobalStyle;
