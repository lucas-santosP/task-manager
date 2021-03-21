import React, { ReactNode } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";

const StyledGridLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  animation: fadeIn 0.5s ease;

  > main {
    flex: 1;
    width: 100%;
    padding: 0.5rem;
    transition: all ease 0.3s;
  }
`;

interface IProps {
  children: ReactNode;
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <StyledGridLayout>
      <Sidebar />
      <main>{children}</main>
    </StyledGridLayout>
  );
};

export default BaseLayout;
