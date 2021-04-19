import React from "react";
import { StyledButton } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "gray";
  size?: "sm" | "md";
  rounded?: "low" | "full";
}

const Button: React.FC<IProps> = (props: IProps) => {
  const {
    type = "button",
    size = "md",
    rounded = "full",
    children,
    isLoading,
    disabled,
    ...rest
  } = props;

  return (
    <StyledButton
      type={type}
      disabled={isLoading ? isLoading : disabled}
      size={size}
      rounded={rounded}
      {...rest}
    >
      {isLoading && <FaSpinner className="loading-icon" />}

      <div style={{ opacity: isLoading ? 0 : 1 }}>{children}</div>
    </StyledButton>
  );
};

export default Button;
