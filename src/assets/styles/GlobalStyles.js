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
        font-family: 'Poppins';
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
        font-family: 'Poppins';
    }


    button {
        padding: 0;
        cursor: pointer;
    }

    p {
        font-size: 16px;
        line-height: 1.4;
        font-weight: 400;
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

    @keyframes ping {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      80% {
        transform: scale(1.9);
        opacity: 0;
      }
      100% {
        transform: scale(2.4);
        opacity: 0;
      }
    }

    @keyframes bouncing-loader {
      to {
        opacity: 0.1;
        transform: translate3d(0, -1rem, 0);
      }
    }

    @keyframes swipe {
      0% {
        opacity: 1;
        transform: translate3d(40px, 0, 0);
      }
      60% {
        opacity: 0.4;
      }
      100% {
        opacity: 0;
        transform: translate3d(-50px, 0, 0);
      }
    }
  `

export default GlobalStyle
