import styled, { css } from "styled-components";
import { baseInput, breakPoints } from "../../../styles/shared";

interface IProps {
  autoResizeY?: boolean;
}

export const StyledTextArea = styled.textarea<IProps>`
  ${baseInput}
  resize: none;

  ${({ autoResizeY }) =>
    autoResizeY &&
    css`
      resize: vertical;
      min-height: 3.5rem;
      max-height: 10rem;

      @media (max-width: ${breakPoints.sm}) {
        min-height: 4.7rem;
      }
    `}
`;
