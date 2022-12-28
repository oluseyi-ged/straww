import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Rubik-Regular';
    src: url('/fonts/Rubik-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

    @font-face {
    font-family: 'Rubik-Bold';
    src: url('/fonts/Rubik-Bold.woff') format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Rubik-Regular';
    transition: all 0.50s linear;
}
`
