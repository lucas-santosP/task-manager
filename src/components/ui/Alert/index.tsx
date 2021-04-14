import React from "react";
import { StyledAlert } from "./styles";

const Alert: React.FC = (props) => {
  const { children, ...rest } = props;

  return <StyledAlert {...rest}>{children}</StyledAlert>;
};

export default Alert;
