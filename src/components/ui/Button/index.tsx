import React from "react";
import { StyledButton } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  color?: "default" | "gray";
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { type = "button", color = "default", children, isLoading, disabled, ...rest } = props;

  return (
    <StyledButton type={type} disabled={isLoading ? isLoading : disabled} color={color} {...rest}>
      {isLoading && <FaSpinner className="loading-icon" />}

      <div style={{ opacity: isLoading ? 0 : 1 }}>{children}</div>
    </StyledButton>
  );
};

export default Button;
