import styled, { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  animation: ${fadeInAnimation} 0.5s ease;
  display: flex;
  flex-direction: column;
`;

export const breakPoint = {
  xl: "576px",
  sm: "768px",
};
