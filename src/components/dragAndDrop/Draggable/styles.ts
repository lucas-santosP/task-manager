import styled from "styled-components";
import { baseTransition } from "../../../styles/mixins";

export const DraggableWrapper = styled.div`
  ${baseTransition}
  position: relative;
  left: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  cursor: move;

  svg {
    width: 20px;
    height: 18px;
  }
`;
