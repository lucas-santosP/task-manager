import React, { Suspense } from "react";
import { StyledGridLayout } from "./styles";
import Sidebar from "./Sidebar";
import LoadingBar from "./LoadingBar";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <StyledGridLayout>
      <Sidebar />

      <main>
        <Suspense fallback={<LoadingBar />}>{children}</Suspense>
      </main>
    </StyledGridLayout>
  );
};

export default BaseLayout;
