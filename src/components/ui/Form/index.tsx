import React, { ReactNode } from "react";
import { StyledForm } from "./styles";
import { Button, HorizontalDivider } from "../";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  buttonText: string;
  bottomText?: ReactNode;
  isLoading?: boolean;
}

const Form: React.FC<IProps> = (props) => {
  const { children, buttonText, isLoading, bottomText, ...rest } = props;

  return (
    <StyledForm {...rest}>
      {children}

      <Button type="submit" className="button" isLoading={isLoading}>
        {buttonText}
      </Button>

      <HorizontalDivider maxWidth={"360px"} marginY={"1.5rem"} />

      {bottomText && <span className="bottom-text">{bottomText}</span>}
    </StyledForm>
  );
};

export default Form;
