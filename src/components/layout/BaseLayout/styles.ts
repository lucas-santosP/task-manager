import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../../styles/animations";

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
