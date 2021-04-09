import React, { InputHTMLAttributes, useEffect, useMemo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputContainer, StyledInput } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  focused?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = (props) => {
  const { type = "text", label = "", focused = false, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = useMemo(() => uuidv4(), []);

  useEffect(() => {
    if (focused) inputRef.current?.focus();
  }, []);

  return (
    <InputContainer>
      {label && <label htmlFor={uniqueId}>{label}</label>}

      <StyledInput ref={inputRef} type={type} id={uniqueId} {...rest} />
    </InputContainer>
  );
};

export default Input;
