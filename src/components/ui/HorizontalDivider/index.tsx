import React from "react";
import { DividerContainer } from "./styles";

interface IProps {
  width?: string;
  maxWidth?: string;
  marginY?: string;
}

const HorizontalDivider: React.FC<IProps> = (props) => {
  const { width, maxWidth, marginY } = props;
  return (
    <DividerContainer width={width} maxWidth={maxWidth} marginY={marginY}>
      <div className="content">
        <div className="square"></div>
        <span className="line left"></span>
        <span className="line right"></span>
      </div>
    </DividerContainer>
  );
};

export default HorizontalDivider;
