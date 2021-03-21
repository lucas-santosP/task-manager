import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 9999px;
  min-height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => theme.spacing.sm + " " + theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  &:hover {
    transition: all ease 0.3s;
    filter: brightness(120%);
  }

  &:focus {
    box-shadow: 0 0 1px 2px #59b6ec;
    outline: none;
  }
`;

interface IProps {
  children: ReactNode;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
