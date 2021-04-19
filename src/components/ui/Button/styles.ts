import { lighten, grayscale } from "polished";
import styled, { css } from "styled-components";
import { baseTransition } from "../../../styles/mixins";

interface IPropsStyledButton {
  isLoading?: boolean;
}

export const StyledButton = styled.button<IPropsStyledButton>`
  ${baseTransition}
  position: relative;
  display: flex;
  align-items: center;
  min-height: 2rem;
  padding: ${({ theme }) => theme.spacing.xs + " " + theme.spacing.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  text-align: center;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => lighten(0.06, theme.colors.primary)};
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
    background-color: ${({ theme }) => grayscale(theme.colors.primary)};
  }

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: ${theme.colors.gray};
      &:hover {
        background-color: ${lighten(0.09, theme.colors.gray)};
      }
    `}

  ${({ isLoading, theme }) =>
    isLoading &&
    css`
      &:disabled,
      &:hover {
        opacity: 1;
        background-color: ${theme.title === "light" ? theme.colors.primary : theme.colors.gray};
      }
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
