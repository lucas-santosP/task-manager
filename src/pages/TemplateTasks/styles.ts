import styled, { css } from "styled-components";
import { baseTransition, flexCenter } from "../../styles/shared";
import { lighten, shade } from "polished";

export const TitleIconsContainer = styled.div`
  ${flexCenter}
  justify-content: flex-start;

  > svg {
    ${baseTransition}
    margin: 0 0.35rem;

    &:first-of-type {
      margin-left: 1rem;
    }

    &:hover {
      cursor: pointer;
      border-radius: 0.3rem;
      background-color: ${({ theme }) => shade(0.07, theme.colors.background)};

      ${({ theme }) =>
        theme.title === "dark" &&
        css`
          background-color: ${({ theme }) => lighten(0.15, theme.colors.background)};
        `}
    }

    &.edit {
      color: ${({ theme }) => theme.colors.green};
    }
    &.delete {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
