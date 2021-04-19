import React, { ReactChild } from "react";
import { ContainerIcon } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLDivElement> {
  icon: ReactChild;
  hoverBgColor?: string;
}

const IconWrapper: React.FC<IProps> = (props) => {
  const { icon, ...rest } = props;

  return <ContainerIcon {...rest}>{icon}</ContainerIcon>;
};

export default IconWrapper;
