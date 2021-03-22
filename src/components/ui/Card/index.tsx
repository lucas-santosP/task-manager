import React from "react";
import styled, { css } from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.205);

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: #fff;
        `
      : css`
          background-color: ${theme.colors.primary};
        `}
`;

const Card: React.FC = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
