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

const LoadingBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 7px;
  width: 100%;

  > div {
    height: 7px;
    background-color: ${({ theme }) => theme.colors.blue};
    animation: ${growsWidth} 600ms linear;
  }
`;

const LoadingView: React.FC = () => {
  return (
    <LoadingBar>
      <div></div>
    </LoadingBar>
  );
};

export default LoadingView;
