import React from "react";
import { CardContainer, CardHeader } from "./styles";

interface IProps {
  title?: string;
}

const Card: React.FC<IProps> = (props) => {
  const { children, title } = props;

  return (
    <CardContainer>
      {title && (
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>
      )}

      <main>{children}</main>
    </CardContainer>
  );
};

export default Card;
