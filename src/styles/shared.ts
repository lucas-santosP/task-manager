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
export const noFocus = css`
  &:focus {
    box-shadow: none;
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
export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeInAnimation} 0.8s ease;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 300px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IPropsPageTitle {
  align?: "center" | "start";
}
export const PageTitle = styled.h1<IPropsPageTitle>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: ${({ align }) => align || "start"};

  @media (max-width: ${breakPoints.xl}) {
    font-size: 2rem;
  }
`;
