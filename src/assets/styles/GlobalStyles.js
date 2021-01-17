import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
    box-sizing: inherit;
    }

    body {
        margin: 0;
        font-size: 1.6rem;
        font-family: 'Mukta';
        background-color: ${({ theme }) =>
          theme.isDark ? theme.darkGrey : theme.white};
        transition: background-color 0.5s ease;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    a,
    ul,
    ol,
    input,
    textarea,
    button,
    abbr {
        font-family: 'Mukta';
    }


    button {
        padding: 0;
        cursor: pointer;
    }

    p {
        font-size: 16px;
        line-height: 1.4;
        font-weight: 500;
        color: ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
        transition: color 0.5s ease;
        margin-top: 0;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    img {
        max-width: 100%;
        width: 100%;
    }

    @keyframes appear {
        0% {
          opacity: 0;
          bottom: 0px;
        }
        20% {
            opacity: 0;
          }
        100% {
          opacity: 1;
          bottom: -20px;
        }
    }
  `

export default GlobalStyle
