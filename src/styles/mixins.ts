import { css } from "styled-components";

export const baseFocus = css`
  &:focus {
    box-shadow: 0 0 1px 2px #59b6ec;
    outline: none;
  }
`;

export const noFocus = css`
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const baseTransition = css`
  transition: all ease 0.3s;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const baseInput = css`
  ${baseFocus}
  ${baseTransition}
  width:100%;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: #f5f5f5;
  box-shadow: 0 0 0 1px rgba(51, 51, 51, 0.3);

  &::placeholder {
    color: #939393;
  }

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: ${theme.colors.gray};
      box-shadow: 0 0 0 1px ${theme.colors.gray};
      &::placeholder {
        color: #bababa;
      }
    `}
`;
