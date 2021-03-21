import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const StyledBaseLayout = styled.div`
  width: 100%;
  height: 100vh;
  animation: fadeIn 0.5s ease;

  > main {
    width: 100%;
    padding: 0.5rem;
    transition: all ease 0.3s;
  }
`;

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <StyledBaseLayout>
      <main>{children}</main>
    </StyledBaseLayout>
  );
};

export default BaseLayout;
