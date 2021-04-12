import styled, { css } from "styled-components";
import { baseTransition, flexCenter } from "../../styles/shared";
import { lighten, shade } from "polished";

export const TitleIconsContainer = styled.div`
  ${flexCenter}
  justify-content: flex-start;

  .text {
    margin-right: 1rem;
  }

  .icon {
    ${baseTransition}
    margin: 0 0.35rem;

    &:hover {
      cursor: pointer;
      border-radius: 0.3rem;
      background-color: ${({ theme }) => shade(0.08, theme.colors.background)};

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
