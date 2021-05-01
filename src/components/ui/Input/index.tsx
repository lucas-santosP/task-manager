import React, { InputHTMLAttributes, ReactNode, useEffect, useMemo, useRef } from "react";
import { StyledInput } from "./styles";
import { v4 as uuidv4 } from "uuid";
import InputRow from "../InputRow";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  focused?: boolean;
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
    <InputRow htmlFor={uniqueId} label={label}>
      <StyledInput ref={inputRef} type={type} autoComplete="off" id={uniqueId} {...rest} />
    </InputRow>
  );
};

export default Input;
