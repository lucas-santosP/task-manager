import React from "react";
import { StyledButton, LoadingIcon } from "./styles";

export type IButtonVariant = "red" | "gray" | "green" | "blue";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IButtonVariant;
  color?: string;
  paddingLg?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { type = "button", children, variant, paddingLg, isLoading, disabled, ...rest } = props;

  return (
    <StyledButton
      type={type}
      disabled={isLoading ? isLoading : disabled}
      variant={variant}
      paddingLg={paddingLg}
      {...rest}
    >
      {isLoading && <LoadingIcon />}

      <div style={{ opacity: isLoading ? 0 : 1 }}>{children}</div>
    </StyledButton>
  );
};

export default Button;
