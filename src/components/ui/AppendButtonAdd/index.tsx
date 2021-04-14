import React, { MouseEvent } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { AppendButton, ContainerFixed } from "./styles";

interface IProps {
  onClick: (e: MouseEvent) => unknown;
  text: string;
}

const AppendButtonAdd: React.FC<IProps> = (props) => {
  const { onClick, text } = props;

  function handleOnClick(e: React.MouseEvent) {
    e.stopPropagation();
    onClick(e);
  }

  return (
    <div>
      <AppendButton onClick={handleOnClick}>
        <HiOutlinePlus size="2.4rem" />
      </AppendButton>

      <ContainerFixed className="container-fixed" onClick={handleOnClick}>
        <span className="text">{text}</span>
      </ContainerFixed>
    </div>
  );
};

export default AppendButtonAdd;
