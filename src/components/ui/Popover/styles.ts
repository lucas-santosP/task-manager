import { lighten, shade } from "polished";
import styled from "styled-components";
import { baseTransition, flexCenter, noFocus } from "../../../styles/shared";

export const PopoverContainer = styled.div`
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

  &:focus {
    ${noFocus}
  }

  * {
    pointer-events: auto;
  }

  > ul {
    display: none;
  }

  &:focus-within {
    > ul {
      display: flex;
    }
    &::after {
      display: block;
    }
  }

  /* triangle */
  &::after {
    content: "";
    display: none;
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #bdbdbd;
  }
`;

export const PopoverList = styled.ul`
  ${baseTransition}
  position: absolute;
  z-index: 15;
  top: calc(100% + 0.7rem);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 0.5rem;
  box-shadow: 0 0 3px 0px #333;
  background-color: ${({ theme }) =>
    theme.title === "light" ? theme.colors.lightGray : theme.colors.gray};
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.text};

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
