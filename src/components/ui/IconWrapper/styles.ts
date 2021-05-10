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
        background-color: ${({ theme }) =>
          theme.title === "light" ? shade(0.1, hoverBgColor) : shade(0.1, theme.colors.gray)};
      }
    `}

  svg {
    font-size: inherit;
  }
`;
