import styled, { css } from "styled-components";
import { baseTransition, noFocus, breakPoints, flexCenter } from "../../../styles/shared";

export const AppendButton = styled.button.attrs({ type: "button" })`
  ${baseTransition}
  ${noFocus}
  position: fixed;
  z-index: 10;
  bottom: 0.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  box-shadow: 0 0 2px 0px #fff;
  font-size: 1.1rem;

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
      box-shadow: 0 0 2px 0px #000;
    `}

  &:hover ~ .container-fixed {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${breakPoints.xs}) {
    width: 3rem;
    height: 3rem;
  }
`;

export const ContainerFixed = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 130px;
  border-top-left-radius: 0.5rem;
  overflow: hidden;
  background-image: linear-gradient(#bdbdbd, transparent);
  /* visibility */
  opacity: 0;
  pointer-events: none;
  transition: opacity 500ms ease;

  &:hover {
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-image: linear-gradient(#696969, transparent);
    `}

  @media (max-width: ${breakPoints.xs}) {
    height: 110px;
    width: 160px;
  }

  .text {
    ${baseTransition}
    ${flexCenter}
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1rem;
    color: #fff;
    ${({ theme }) => css`
      font-family: ${theme.fontFamily.secondary};
      background-color: ${theme.colors.primary};
    `}

    &:hover {
      filter: brightness(115%);
    }

    @media (max-width: ${breakPoints.xs}) {
      font-size: 0.8rem;
    }
  }
`;
