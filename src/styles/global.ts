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

  button{
    cursor:pointer;
  } 

  body{
    background-color: ${(props) => props.theme.colors.background};
    font-size:16px;
    color:${(props) => props.theme.colors.text};
    font-family: "arial", sans-serif;
  }
`;
