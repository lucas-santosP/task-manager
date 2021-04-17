import styled, { css, keyframes } from "styled-components";

export const breakPoints = {
  xs: "576px",
  sm: "768px",
  md: "1024px",
  lg: "1536px",
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

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const zoomInAnimation = keyframes` 
  from {
    transform: translate(-50%, -50%) scale(0.5);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
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
  min-width: 250px;
  max-width: 2000px;
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

  @media (max-width: ${breakPoints.xs}) {
    font-size: 2rem;
  }
`;

export const baseInput = css`
  ${baseFocus}
  width:100%;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: #f5f5f5;
  box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.3);

  &::placeholder {
    color: #939393;
  }

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: ${theme.colors.gray};
      box-shadow: 0 0 0 1px ${theme.colors.gray};
      &::placeholder {
        color: #bababa;
      }
    `}
`;
