import React from "react";
import { StyledButton } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "pill" | "rounded";
  color?: "default" | "gray";
  size?: "sm" | "md";
}

const Button: React.FC<IProps> = (props: IProps) => {
  const {
    type = "button",
    variant = "pill",
    color = "default",
    size = "md",
    children,
    isLoading,
    disabled,
    ...rest
  } = props;

  return (
    <StyledButton
      type={type}
      disabled={isLoading ? isLoading : disabled}
      variant={variant}
      color={color}
      size={size}
      {...rest}
    >
      {isLoading && <FaSpinner className="loading-icon" />}

      <div style={{ opacity: isLoading ? 0 : 1 }}>{children}</div>
    </StyledButton>
  );
};

export default Button;
