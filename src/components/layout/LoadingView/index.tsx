import React from "react";
import { LoadingContainer } from "./styles";

const LoadingView: React.FC = () => {
  return (
    <LoadingContainer>
      <div className="loader"></div>
    </LoadingContainer>
  );
};

export default LoadingView;
