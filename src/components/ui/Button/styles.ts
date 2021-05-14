import { lighten, shade } from "polished";
import styled, { css, DefaultTheme } from "styled-components";
import { baseTransition, flexCenter } from "../../../styles/mixins";
import { IButtonVariant } from "./index";
import { FaSpinner } from "react-icons/fa";

type IColors = { [Property in IButtonVariant]: string };

const colors: IColors = {
  red: "#d43d3d",
  blue: "#005caf",
  green: "#4caf50",
  gray: "#607d8b",
};

interface IPropsStyledButton {
  isLoading?: boolean;
  paddingLg?: boolean;
  variant?: IButtonVariant;
}

const variantStyles = (theme: DefaultTheme, variant?: IButtonVariant, isLoading?: boolean) => {
  let backgroundColor = theme.title === "light" ? theme.colors.primary : theme.colors.gray;
  if (variant) backgroundColor = colors[variant];

  return css`
    color: #fff;
    background-color: ${backgroundColor};

    &:hover {
      background-color: ${shade(0.1, backgroundColor)};
    }

    &:disabled {
      opacity: 0.6;
      pointer-events: none;
      background-color: ${lighten(0.06, backgroundColor)};
    }

    &:after {
      content: "";
      border-radius: 50%;
      background: ${lighten(0.3, backgroundColor)};
      display: block;
      position: absolute;
      z-index: -1;
      padding-top: 150%;
      padding-left: 200%;
      opacity: 0;
      transition: all 0.7s;
    }

    &:active:after {
      transition: 0s;
      opacity: 1;
      z-index: 1;
      padding: 0;
      margin: 0;
    }

    ${isLoading &&
    css`
      &:disabled,
      &:hover {
        opacity: 1;
        background-color: ${backgroundColor};
      }
    `}
  `;
};

export const StyledButton = styled.button<IPropsStyledButton>`
  ${baseTransition}
  ${flexCenter}
  position: relative;
  width: max-content;

  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;

  ${({ theme, isLoading, variant, paddingLg }) => css`
    padding: ${paddingLg ? "0.3rem 2.75rem" : "0.3rem 0.75rem"};

    ${variantStyles(theme, variant, isLoading)}
  `}
`;

export const LoadingIcon = styled(FaSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2rem;
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
