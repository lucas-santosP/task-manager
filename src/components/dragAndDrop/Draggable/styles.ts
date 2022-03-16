import { shade } from "polished";
import styled from "styled-components";
import { baseTransition } from "../../../styles/mixins";

export const DraggableWrapper = styled.div`
  ${baseTransition}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: move;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 0.5rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:hover {
    background-color: ${({ theme }) =>
      theme.title == "light"
        ? shade(0.05, theme.colors.background)
        : shade(0.3, theme.colors.gray)};
  }

  .icon {
    width: 0.875rem;
  }
`;
