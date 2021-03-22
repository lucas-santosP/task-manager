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
    background-color: #7091eb;
    animation: ${growsWidth} 500ms linear forwards;
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
