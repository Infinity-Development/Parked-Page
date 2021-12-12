import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    .dropdown {
        float: right;
        overflow: hidden;
        animation: fadeIn 0.7s;
      }
      
      .dropdown .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        /**padding: 14px 16px;**/
        background-color: inherit;
        font-family: inherit;
        animation: fadeIn 0.7s;
        /**margin: 0;**/
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #16151d;
        min-width: 160px;
        transition: 0.4s;
        border-radius: 5px;
        animation: fadeIn 0.7s;
        padding: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
      
      .dropdown-content a {
        float: none;
        color: rgba(255, 255, 255, 0.822);
        padding: 12px 16px;
        text-decoration: none;
        transition: 0.4s;
        display: block;
        animation: fadeIn 0.7s;
        text-align: left;
      }
      
      .dropdown-content a:hover {
        transition: 0.4s;
        animation: fadeIn 0.7s;
        color: rgb(109, 147, 252);
      }
      
      .dropdown:hover .dropdown-content {
        transition: 0.4s;
        display: block;
        animation: fadeIn 1s;
      }
      .dropdown {
        float: right;
        overflow: hidden;
        animation: fadeIn 0.7s;
      }
      /* Style the header links */
      .header a {
        color: rgb(255, 255, 255);
        text-align: center;
        padding: 5px;
        text-decoration: none;
        transition: 0.2s;
        font-size: 18px;
        line-height: 25px;
        border-radius: 3px;
      }
      /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
      
      /* Change the background color on mouse-over */
      .header a:hover {
        color: rgb(142, 153, 255);
      }
      /* Style the active/current link*/
      .button {
        color: rgb(255, 255, 255);
        text-align: center;
        padding: 10px;
        text-decoration: none;
        font-size: 18px;
        transition: 0.2s;
        border-radius: 5px;
        line-height: 25px;
        width: 130px;
        outline: none;
        margin: 5px;
        cursor: pointer;
        box-shadow: 0px 0px 0px;
      }
      
      .button:hover {
        color: rgb(142, 153, 255);
      }
      /* Float the link section to the right */
      .header-right {
        float: right;
      }
      .header-left {
        float: left;
      }
      
      /* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
      @media screen and (max-width: 500px) {
        .header a {
          float: none;
          display: block;
          text-align: left;
        }
      }
      .wave {
        animation: wave 5s linear;
        animation-iteration-count: infinite;
        fill: #7289da;
      }
      body {
        font-family: 'Quicksand', sans-serif;
        background-color: #16151d;
      }
      .left {
        margin-left: 80px;
        color: white;
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
      .content {
        display: none;
        position: absolute;
        background-color: #838383;
        min-width: 160px;
        transition: 0.4s;
        border-radius: 5px;
        width: 0px;
        height: 200px;
        animation: fadeIn 1s;
        padding: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
      
      .dropdown2 {
        float: right;
        overflow: hidden;
        animation: fadeIn 0.7s;
      }
      
      .dropdown2 .dropbtn2 {
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        animation: fadeIn 0.7s;
        margin: 0;
      }
      
      .dropdown2-content {
        display: none;
        position: absolute;
        background-color: #23222b;
        min-width: 160px;
        transition: 0.4s;
        width: 250px;
        animation: fadeIn 0.7s;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
      
      .dropdown2-content a {
        float: none;
        color: rgb(255, 255, 255);
        padding: 12px 16px;
        text-decoration: none;
        transition: 0.4s;
        display: block;
        animation: fadeIn 0.7s;
        text-align: left;
      }
      
      .dropdown2-content a:hover {
        transition: 0.4s;
        animation: fadeIn 0.7s;
        color: rgb(105, 118, 238);
      }
      
      .dropdown2:hover .dropdown2-content {
        transition: 0.4s;
        display: block;
        animation: fadeIn 1s;
      }
      .dropdown2 {
        float: right;
        overflow: hidden;
        animation: fadeIn 0.7s;
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
