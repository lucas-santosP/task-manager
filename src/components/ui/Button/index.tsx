import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 9999px;
  min-height: 2rem;
  font-size: 1.2rem;
  padding: ${({ theme }) => theme.spacing.xs + " " + theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  &:hover {
    transition: all ease 0.3s;
    filter: brightness(120%);
  }

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: ${theme.colors.primary};
        `
      : css`
          background-color: ${theme.colors.gray};
        `}
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
