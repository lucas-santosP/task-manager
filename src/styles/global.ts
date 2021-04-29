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
  
  *:focus { 
    box-shadow: 0 0 1px 2px #59b6ec;
    outline: none;
  }

  body {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    transition: all ease .2s;
    overflow: hidden;
  }

  button {
    cursor:pointer;
    font-family: inherit;
    color:inherit;
  }

  input,
  select,
  textarea {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: inherit;
    color:inherit;
  }
  
  a {
    color: ${(props) => props.theme.colors.textHighlight};
    
    &:hover{
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakPoints.xs}) {
    html {
      font-size: 13px;
    }
  }
`;
