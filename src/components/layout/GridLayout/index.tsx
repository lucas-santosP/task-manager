import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import { fadeInAnimation } from "../../../styles/animations";

const StyledGridLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  animation: ${fadeInAnimation} 0.5s ease;
  transition: background-color 0.3s ease;

  > main {
    flex: 1;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: all ease 0.3s;
  }
`;

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledGridLayout>
      <Sidebar />

      <main> {children}</main>
    </StyledGridLayout>
  );
};

export default BaseLayout;
