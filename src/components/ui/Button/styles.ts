import { lighten, shade } from "polished";
import styled, { css } from "styled-components";
import { baseTransition, flexCenter } from "../../../styles/mixins";

interface IPropsStyledButton {
  isLoading?: boolean;
  color: "default" | "gray";
}

// const colors = { red: " #d43d3d", green: "#4caf50", gray: "#607d8b",};

export const StyledButton = styled.button<IPropsStyledButton>`
  ${baseTransition}
  ${flexCenter}
  position: relative;
  width: max-content;
  padding: 0.3rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;

  ${({ theme, isLoading, color }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.title === "light" ? theme.colors.primary : theme.colors.gray};

    &:hover {
      background-color: ${theme.title === "light"
        ? shade(0.06, theme.colors.primary)
        : shade(0.1, theme.colors.gray)};
    }

    &:disabled {
      opacity: 0.6;
      pointer-events: none;
      background-color: ${lighten(0.06, theme.colors.primary)};
    }

    ${isLoading &&
    css`
      &:disabled,
      &:hover {
        opacity: 1;
        background-color: ${theme.title === "light" ? theme.colors.primary : theme.colors.gray};
      }
    `}

    ${color === "gray" &&
    css`
      background-color: #8f8f8f;
      &:hover {
        background-color: ${shade(0.1, "#8f8f8f")};
      }
    `}
  `}

  .loading-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
