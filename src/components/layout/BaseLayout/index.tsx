import React from "react";
import styled from "styled-components";

const StyledBaseLayout = styled.div`
  width: 100%;
  height: 100vh;
  animation: fadeIn 0.5s ease;

  > main {
    position: relative;
    width: 100%;
    padding: 0.5rem;
    transition: all ease 0.3s;
  }
`;

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledBaseLayout>
      <main>{children}</main>
    </StyledBaseLayout>
  );
};

export default BaseLayout;
