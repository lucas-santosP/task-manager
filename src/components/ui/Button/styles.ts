import styled, { css } from "styled-components";

interface IProps {
  isLoading?: boolean;
}

export const StyledButton = styled.button<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 2rem;
  padding: ${({ theme }) => theme.spacing.xs + " " + theme.spacing.lg};
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  text-align: center;

  &:hover {
    transition: all ease 0.3s;
    filter: brightness(120%);
  }

  &:disabled {
    cursor: wait;
    filter: brightness(120%);
  }

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: ${theme.colors.primary};
        `
      : css`
          background-color: ${theme.colors.gray};
        `}

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
