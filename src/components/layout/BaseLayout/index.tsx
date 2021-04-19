import React from "react";
import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../../styles/animations";
import { AppendButtonToggleTheme } from "../../ui";

const StyledBaseLayout = styled.div`
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
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;
  }
`;

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledBaseLayout>
      <AppendButtonToggleTheme />
      <main>{children}</main>
    </StyledBaseLayout>
  );
};

export default BaseLayout;
