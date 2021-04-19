import styled, { css } from "styled-components";
import { shade } from "polished";
import { baseTransition, flexCenter } from "../../../styles/mixins";

export const ContainerIcon = styled.div<{ hoverBgColor?: string }>`
  ${flexCenter}
  ${baseTransition}
  padding: 0.2rem;
  user-select: none;
  border-radius: 0.3rem;

  ${({ hoverBgColor }) =>
    hoverBgColor &&
    css`
      &:hover {
        cursor: pointer;
        background-color: ${shade(0.1, hoverBgColor)};
      }
    `}

  svg {
    font-size: inherit;
  }
`;
