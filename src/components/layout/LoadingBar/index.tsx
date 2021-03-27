import React from "react";
import styled, { keyframes } from "styled-components";

const growsWidth = keyframes`
  from {
    width:0%; 
  }
  100%{
    width:100%; 
  }
`;

const StyledLoadingBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 7px;
  width: 100%;
  height: 7px;
  background-color: ${({ theme }) => theme.colors.blue};
  animation: ${growsWidth} 500ms linear forwards;
`;

const LoadingBar: React.FC = () => {
  return <StyledLoadingBar />;
};

export default LoadingBar;
