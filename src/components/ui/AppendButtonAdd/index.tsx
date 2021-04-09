import React, { MouseEvent } from "react";
import { HiOutlinePlus } from "react-icons/hi";
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
        <HiOutlinePlus />
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
