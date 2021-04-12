import { createGlobalStyle } from "styled-components";
import { breakPoints } from "./shared";

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
  }
  
  *:focus{ 
    box-shadow: 0 0 1px 2px #59b6ec;
    outline: none;
  }

  body{
    font-size:16px;
    color:${(props) => props.theme.colors.text};
    background-color:${(props) => props.theme.colors.background};
    font-family:${(props) => props.theme.fontFamily.primary};
    transition: all ease .2s;
    overflow: hidden;
  }

  button{
    cursor:pointer;
  } 
  
  a {
    color:${(props) => props.theme.colors.textHighlight};
    
    &:hover{
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakPoints.xs}) {
    body{
      font-size: 14px;
    }
  }
`;
