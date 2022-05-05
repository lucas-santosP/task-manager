import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../../styles/animations";
import { breakPoints } from "./../../../styles/shared";

export const StyledBaseLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  animation: ${fadeInAnimation} 0.5s ease;
  transition: background-color 0.3s ease;

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: ${theme.colors.secondary};
        `
      : css`
          background-color: ${theme.colors.background};
        `}

  > main {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;
  }
`;

export const LeftBackgroundImage = styled.img`
  object-fit: cover;
  position: absolute;
  padding: 2rem 0;
  height: 100vh;
  top: 0%;
  left: 0;

  @media (max-width: ${breakPoints.sm}) {
    object-fit: contain;
    max-width: 45%;
    top: 50%;
  }
`;

export const RightBackgroundImage = styled.img`
  object-fit: cover;
  position: absolute;
  padding-bottom: 2rem;
  height: 100vh;
  top: 0%;
  right: 0;

  @media (max-width: ${breakPoints.sm}) {
    object-fit: contain;
    max-width: 45%;
    top: 30%;
    transform: rotate(180deg);
  }
`;
