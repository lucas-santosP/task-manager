import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    user-select: none; 
  }

  body{
    background-color: #f5f5f5;
    font-size:16px;
    color:#333;
    font-family: "arial", sans-serif;
  }
`;
