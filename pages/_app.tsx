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
      #return-to-top {
    border:none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #0090FF;
    width: 50px;
    height: 50px;
    display: block;
    text-decoration: none;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    border-radius: 35px;
    display: none;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
#return-to-top i {
    color: white;
    margin: 0;
    position: relative;
    left: 1px;
    top: 1px;
    font-size: 19px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
#return-to-top:hover {
    background: rgba(0, 0, 0, 0.9);
}
#return-to-top:hover i {
    color: #0090FF;
    top: 5px;
}
.right{
position: absolute;
right: 0;
margin-right: 80px;
background-color: #7289da;
border: 2px solid #7289da;
color: #fff;
display: inline-block;
font-family: Whitney, "Open Sans", Helvetica, sans-serif;
font-weight: 400;
font-size: 11pt;
border-radius: 3px;
cursor: pointer;
height: 45px;
width: 250px;
box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.right:active {
  transform: translateY(2px);
}
.right:hover {
  transform: translateY(1px);
}
.ready{
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 120px;
}
footer {
    background-color: #0f0f0e;
    font-family: "Roboto", sans-serif;
    padding: 85px 0 285px 0;
    border: 5px solid #0090FF;
    border-radius: 5px;
    
}
.footer-inner {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 120px;
    max-width: 1170px;
    position: relative;
}
.footer-item {
    float: left;
    margin: 0 7.2% 0 0;
}
.footer-item:nth-of-type(4) {
    display: none;
}
.footer-item:nth-of-type(7) {
    float: right;
    margin-right: 0;
}
.footer-button {
    color: white;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    transition: 1s;
    transition-delay: .2s;
    padding: 14px;
}
  
.footer-button:after {
    content: "";
    position: absolute;
    top: 45px;
    right: 13px;
    background-color: white;
    height: 1px;
    width: 86px;
    transition: .6s;
}
  
.footer-button:hover {
    color: black;
    background-color: white;
}
  
.footer-button:hover:after {
    width: 112px;
    right: 0px;
}
h1 {
    font-weight: 900;
    color: white;
    font-size: 24px;
    letter-spacing: 2px;
    margin: 0;
    padding-bottom: 10px;
}
  
h2 {
    font-weight: 300;
    line-height: 1.8;
    font-size: 13px;
    color: #d1d1d1;
    letter-spacing: 0.03em;
    padding: 15px 0 0 0;
}
  
.color {
    color: white;
    font-weight: 400;
}
  
h3 {
    font-weight: 400;
    font-size: 13px;
    color: white;
    margin: 0;
    padding-bottom: 9px;
    letter-spacing: 0.03em;
}
h3.desktop {
    padding-top: 30px;
}
  
ul {
    line-height: 1.8;
    list-style-type: none;
    padding: 0;
}
  
li {
    font-weight: 300;
    font-size: 13px;
    color: #d1d1d1;
    letter-spacing: 0.03em;
}
  
p {
    font-weight: 300;
    font-size: 13px;
    padding: 0;
    line-height: 1.8;
    letter-spacing: 0.03em;
}
  
a {
    text-decoration: none;
    color: #d1d1d1;
}
  
a:hover {
    color: white;
}
  
.desktop {
    display: auto;
}
.footer-inner:after {
    content: "";
    font-weight: 300;
    letter-spacing: 0.03em;
    font-size: 13px;
    color: #d1d1d1;
    position: absolute;
    top: 260px;
    clear: both;
    display: block;
}
@media (max-width: 1024px) {
  
footer {
    padding: 50px 0 70px 0 !important;
}
.footer-inner {
    border-bottom: 1px solid #333;
    padding-bottom: 490px;
    margin-bottom: 50px;
}
.footer-item {
    margin: 0 0 42px 0;
    width: 50%;
}
.footer-item:nth-of-type(1) {
    border-bottom: 1px solid #333;
    padding-bottom: 32px;
    float: none;
    width: 100%;
}
.footer-item:nth-of-type(2) {
    clear: both;
}
.footer-item:nth-of-type(4) {
    clear: both;
    display: block;
}
.footer-item:nth-of-type(6) {
    clear: both;
}
.footer-item:nth-of-type(7) {
    clear: both;
    float: left;
    margin: 20px 0 0 -13px;
}
.desktop {
    display: none;
}
.footer-inner:after {
    top: 730px;
}
}
.hover {
width:200px;
height: 200px;
background-position: center;
background-size: cover;
position: relative;
background-image: url('https://chillcord.life/ChillBotTransNew.png');
animation: hover 3s infinite linear;
} 
@keyframes hover {
  0%   {top: 0px;}
  50%  {top: 80px;}
  100% {top: 0px;}
}

.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 20px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 13px;
        width: 13px;;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
      input:checked + .slider {
        background-color: #0EFF00;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #0EFF00;
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      
      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }
      
      .slider.round:before {
        border-radius: 50%;
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
