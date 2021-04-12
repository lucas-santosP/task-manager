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
  }
`;

export const PopoverList = styled.ul`
  position: absolute;
  top: calc(100% + 0.7rem);
  left: 50%;
  z-index: 15;
  transform: translateX(-50%);
  flex-direction: column;
  background-color: #dedede;
  box-shadow: 0 0 2px 0px #333;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  ${noFocus}

  li {
    ${noFocus}
    ${baseTransition}
    ${flexCenter}
    flex: 1;
    padding: 0.3rem 0.8rem;

    &:hover {
      background-color: #cccccc;
      cursor: pointer;
    }
    &:not(:last-of-type) {
      margin-bottom: 0.2rem;
    }
  }

  /* triangle */
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #bdbdbd;
  }
`;
