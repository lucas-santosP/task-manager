import { shade } from "polished";
import React, { ReactChild } from "react";
import styled, { css } from "styled-components";
import { baseTransition, flexCenter } from "../../../styles/shared";

interface IProps extends React.InputHTMLAttributes<HTMLDivElement> {
  icon: ReactChild;
  hoverBgColor?: string;
}

const ContainerIcon = styled.div<{ hoverBgColor?: string }>`
  ${flexCenter}
  ${baseTransition}
  padding: 0.2rem;
  user-select: none;
  border-radius: 0.3rem;

  ${({ hoverBgColor }) =>
    hoverBgColor &&
    css`
      &:hover {
        cursor: pointer;
        background-color: ${shade(0.1, hoverBgColor)};
      }
    `}

  svg {
    font-size: inherit;
  }
`;

const IconWrapper: React.FC<IProps> = (props) => {
  const { icon, ...rest } = props;

  return <ContainerIcon {...rest}>{icon}</ContainerIcon>;
};

export default IconWrapper;
