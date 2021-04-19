import { lighten, grayscale } from "polished";
import styled, { css } from "styled-components";
import { baseTransition, flexCenter } from "../../../styles/mixins";

interface IPropsStyledButton {
  isLoading?: boolean;
  variant?: "gray";
  size: "sm" | "md";
  rounded: "low" | "full";
}

export const StyledButton = styled.button<IPropsStyledButton>`
  ${baseTransition}
  ${flexCenter}
  position: relative;
  min-height: 2rem;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.5rem 2.5rem;

  ${({ theme, isLoading, variant, size, rounded }) => css`
    border-radius: ${rounded === "full" ? "9999px" : "0.5rem"};
    color: ${theme.colors.secondary};
    background-color: ${theme.title === "light" ? theme.colors.primary : theme.colors.gray};

    &:hover {
      background-color: ${theme.title === "light"
        ? lighten(0.06, theme.colors.primary)
        : lighten(0.09, theme.colors.gray)};
    }

    &:disabled {
      opacity: 0.6;
      pointer-events: none;
      background-color: ${grayscale(theme.colors.primary)};
    }

    ${isLoading &&
    css`
      &:disabled,
      &:hover {
        opacity: 1;
        background-color: ${theme.title === "light" ? theme.colors.primary : theme.colors.gray};
      }
    `}

    ${size === "sm" &&
    css`
      padding: 0.35rem 1.5rem;
      font-size: 1rem;
    `}

    ${variant === "gray" &&
    css`
      background-color: #a2a2a2;
      &:hover {
        background-color: ${lighten(0.06, "#a2a2a2")};
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
