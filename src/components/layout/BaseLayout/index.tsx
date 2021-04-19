import React from "react";
import { StyledBaseLayout } from "./styles";
import { AppendButtonToggleTheme } from "../../ui";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledBaseLayout>
      <AppendButtonToggleTheme />
      <main>{children}</main>
    </StyledBaseLayout>
  );
};

export default BaseLayout;
