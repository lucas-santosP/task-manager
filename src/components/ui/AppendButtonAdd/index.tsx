import React, { MouseEvent } from "react";
import { FaPlus } from "react-icons/fa";
import { AppendButtonContainer, ContainerFixed } from "./styles";

interface IProps {
  onClick: (e: MouseEvent) => void;
  text: string;
}

const AppendButtonAdd: React.FC<IProps> = (props) => {
  const { onClick, text } = props;

  return (
    <>
      <AppendButtonContainer>
        <FaPlus />
      </AppendButtonContainer>
      <ContainerFixed>
        <button type="button" onClick={onClick}>
          {text}
        </button>
      </ContainerFixed>
    </>
  );
};

export default AppendButtonAdd;
