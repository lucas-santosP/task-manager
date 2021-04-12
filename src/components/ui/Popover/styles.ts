import { lighten, shade } from "polished";
import styled, { css } from "styled-components";
import { baseTransition, flexCenter, noFocus } from "../../../styles/shared";
import { IPosition } from "./index";

const popoverBorderColor = "#c3c3c3";

const trianglePseudoElement = css`
  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    z-index: 15;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid;
  }

  &::after {
    bottom: -13px;
    border-bottom: 10px solid
      ${({ theme }) => (theme.title === "light" ? theme.colors.lightGray : theme.colors.gray)};
  }

  &::before {
    bottom: -11px;
    border-bottom: 10px solid ${popoverBorderColor};
  }
`;

export const PopoverContainer = styled.div`
  ${noFocus}
  position: relative;
  display: flex;
  align-items: center;
  font-size: inherit;
  color: inherit;
  background-color: none;
  pointer-events: none;
  pointer-events: auto;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  * {
    pointer-events: auto;
  }

  ${trianglePseudoElement}

  &:after,
  &:before ,
  > ul {
    display: none;
    cursor: default;
  }

  &:focus-within {
    > ul {
      display: flex;
    }

    &:after,
    &:before {
      display: block;
    }
  }
`;

interface IPropsPopoverList {
  position: IPosition;
}

export const PopoverList = styled.ul<IPropsPopoverList>`
  ${baseTransition}
  position: absolute;
  z-index: 15;
  top: calc(100% + 11px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  padding-top: 0.35rem;
  border: 1px solid ${popoverBorderColor};
  font-size: 0.85rem;
  text-align: center;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: ${theme.colors.lightGray};
          box-shadow: 0 0 2px 0px ${popoverBorderColor};
        `
      : css`
          background-color: ${theme.colors.gray};
          box-shadow: 0 0 1px 0px #fff;
        `}

  ${({ position }) => {
    console.log(position === "center", position);
    if (position == "center")
      return css`
        left: 50%;
        transform: translateX(-50%);
      `;
    else if (position === "left")
      return css`
        transform: translateX(-50%);
      `;
  }}

  > li {
    ${baseTransition}
    ${flexCenter} 
    flex: 1;
    padding: 0.5rem 0.8rem;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme.title === "light"
          ? shade(0.1, theme.colors.lightGray)
          : lighten(0.1, theme.colors.gray)};
    }
  }
`;
