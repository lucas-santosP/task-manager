import styled, { css, keyframes } from "styled-components";

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

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 1rem auto 2rem auto;

  @media (max-width: ${breakPoints.xl}) {
    font-size: 2rem;
  }
`;
