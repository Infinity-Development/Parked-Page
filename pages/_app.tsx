import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
     body {
        font-family: 'Quicksand', sans-serif;
        background-color: #16151d;
     }
    .wave {
        animation: wave 5s linear;
        animation-iteration-count: infinite;
        fill: #7289da;
      }
      #wave2 {
      animation-duration:7s;
      animation-direction: reverse;
      opacity: .6;
     }
     #wave3 {
      animation-duration: 9s;
      opacity:.3;
     }
     @keyframes wave {
       to {transform: translateX(-100%);}
      }
      body {
        font-family: 'Quicksand', sans-serif;
        background-color: #16151d;
     }
      strong {
        font-family: 'Quicksand', sans-serif;
        color: white;
      }
      /* Add animation (fade in the popup) */
      @-webkit-keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
