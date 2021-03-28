import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputContainer, StyledInput } from "./styles";

interface IProps {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = (props) => {
  const { type = "text", label = "", name, placeholder, value, onChange } = props;

  const uniqueId = useMemo(() => uuidv4(), []);

  return (
    <InputContainer>
      {label && <label htmlFor={uniqueId}>{label}</label>}

      <StyledInput
        type={type}
        name={name}
        id={uniqueId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
