import React from "react";
import { StyledButton } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { children, isLoading, disabled, ...rest } = props;

  return (
    <StyledButton {...rest} disabled={isLoading ? isLoading : disabled}>
      {isLoading && <FaSpinner />}

      <div style={{ opacity: isLoading ? 0 : 1 }}>{children}</div>
    </StyledButton>
  );
};

export default Button;
