import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // [NextJS Reset]
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    scroll-behavior: smooth;
  }
  body {
    display: flex;
    flex: 1;
    flex-direction: column;
    color: #ffffff;
    background-color: #000064;
  }
  a {
    text-decoration: none;
  }
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
  .react-tel-input .country-list .country-name {
    color: #1A1A1A;
  }
  .react-tel-input .flag-dropdown {
    background-color: #000045;
    border-right: none;
  }
  .react-tel-input .selected-flag .arrow {
    border-top: 4px solid  #C1C0C0;
  }
  input::placeholder {
    color: lightgray; /* Change this to your desired color */
    opacity: 1; /* Ensures visibility */
    font-size: 12pt;
    fontFamily: "Maven Pro";
  }
  // ============
  // [Dark Mode Styles]
  /* body.dark {
    color: #FFFFFF; 
    background-color: #111111;
  } */
  // ============
  // [Reset Styles]
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
