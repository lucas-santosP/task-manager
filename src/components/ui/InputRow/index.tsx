import React, { InputHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLDivElement> {
  htmlFor?: string;
  label?: ReactNode;
}

const InputRow: React.FC<IProps> = (props) => {
  const { label = "", htmlFor, children, ...rest } = props;

  return (
    <Container {...rest}>
      {label && <label htmlFor={htmlFor}>{label}</label>}

      {children}
    </Container>
  );
};

export default InputRow;
