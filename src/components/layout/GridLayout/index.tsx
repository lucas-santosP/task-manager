import React from "react";
import { StyledGridLayout } from "./styles";
import Sidebar from "../Sidebar";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledGridLayout>
      <Sidebar />

      <main> {children}</main>
    </StyledGridLayout>
  );
};

export default BaseLayout;
