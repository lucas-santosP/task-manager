import styled, { css, keyframes } from "styled-components";

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
  animation: ${fadeInAnimation} 0.8s ease;
  display: flex;
  flex-direction: column;
`;

export const breakPoints = {
  xl: "576px",
  sm: "768px",
};

export const baseFocus = css`
  &:focus {
    box-shadow: 0 0 1px 2px #59b6ec;
    outline: none;
  }
`;

export const baseTransition = css`
  transition: all ease 0.3s;
`;
