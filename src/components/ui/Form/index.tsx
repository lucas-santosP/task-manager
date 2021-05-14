import React, { ReactNode } from "react";
import { StyledForm } from "./styles";
import { Button, HorizontalDivider } from "../";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  buttonText?: string;
  bottomText?: ReactNode;
  buttonIsDisable?: boolean;
  isLoading?: boolean;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => unknown;
}

const Form: React.FC<IProps> = (props) => {
  const { children, buttonText, buttonIsDisable, isLoading, bottomText, onSubmit, ...rest } = props;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(e);
  }

  return (
    <StyledForm onSubmit={handleSubmit} {...rest}>
      {children}

      {buttonText && (
        <Button
          type="submit"
          className="button"
          paddingLg
          disabled={buttonIsDisable}
          isLoading={isLoading}
        >
          {buttonText}
        </Button>
      )}

      {bottomText && (
        <>
          <HorizontalDivider maxWidth={"360px"} marginY={"1.5rem"} />
          <span className="bottom-text">{bottomText}</span>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
