import React, { ReactNode, TextareaHTMLAttributes, useEffect, useMemo, useRef } from "react";
import { StyledTextArea } from "./styles";
import { v4 as uuidv4 } from "uuid";
import InputRow from "../InputRow";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  focused?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
}

const TextArea: React.FC<IProps> = (props) => {
  const { label = "", rows = 4, focused = false, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = useMemo(() => uuidv4(), []);

  useEffect(() => {
    if (focused) inputRef.current?.focus();
  }, []);

  return (
    <InputRow htmlFor={uniqueId} label={label}>
      <StyledTextArea id={uniqueId} {...rest} rows={rows} />
    </InputRow>
  );
};

export default TextArea;
