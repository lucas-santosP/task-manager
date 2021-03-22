import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";

const StyledGridLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  animation: fadeIn 0.5s ease;

  > main {
    position: relative;
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
