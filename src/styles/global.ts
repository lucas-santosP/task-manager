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
    transition: all ease .2s;
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
