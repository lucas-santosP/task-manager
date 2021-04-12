import { lighten } from "polished";
import styled, { css } from "styled-components";
import { baseTransition } from "../../../styles/shared";

export const StyledButton = styled.button`
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

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: ${theme.colors.primary};
          &:hover {
            transition: all ease 0.3s;
            background-color: ${lighten(0.09, theme.colors.primary)};
          }
        `
      : css`
          background-color: ${theme.colors.gray};
          &:hover {
            background-color: ${lighten(0.09, theme.colors.gray)};
          }
        `}

  &:disabled {
    cursor: wait;
    filter: brightness(120%);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: spin 1s infinite linear;
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
