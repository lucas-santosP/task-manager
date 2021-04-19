import styled from "styled-components";
import { baseTransition, flexCenter } from "../../styles/mixins";
import { lighten, shade } from "polished";

export const TitleIconsContainer = styled.div`
  ${flexCenter}
  justify-content:flex-start;

  .icon {
    ${baseTransition}

    &:first-of-type {
      margin-left: 1rem;
    }

    &:hover {
      cursor: pointer;
      border-radius: 0.3rem;
      background-color: ${({ theme }) =>
        theme.title === "light"
          ? shade(0.08, theme.colors.background)
          : lighten(0.15, theme.colors.background)};
    }
  }
`;
