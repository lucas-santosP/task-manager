import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import { fadeInAnimation } from "../../../styles/shared";

const StyledGridLayout = styled.div`
  display: flex;
  width: 100%;
  animation: ${fadeInAnimation} 0.5s ease;

  > main {
    position: relative;
    overflow: hidden;
    flex: 1;
    width: 100%;
    padding: 0.5rem;
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
