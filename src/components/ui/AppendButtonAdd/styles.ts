import styled, { css } from "styled-components";
import { baseTransition, rotateAnimation, breakPoints } from "../../../styles/shared";

export const AppendButtonContainer = styled.div`
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
  box-shadow: 0 0 3px 0px #333;
  font-size: 1.1rem;

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
      box-shadow: 0 0 2px 0px #fff;
    `}

  > div {
    opacity: 0;
    pointer-events: none;
    transition: opacity 500ms ease;
  }

  &:hover {
    > div {
      opacity: 1;
      pointer-events: initial;
    }

    svg {
      animation: ${rotateAnimation} 2s infinite linear forwards;
    }
  }

  @media (max-width: ${breakPoints.xl}) {
    width: 3rem;
    height: 3rem;
  }
`;

export const ContainerFixed = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 130px;
  padding-top: 0.5rem;

  @media (max-width: ${breakPoints.xl}) {
    height: 110px;
    width: 160px;
  }

  button {
    ${baseTransition}
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    box-shadow: 0 0 3px 0px #fff;

    &:hover {
      filter: brightness(120%);
    }

    @media (max-width: ${breakPoints.xl}) {
      font-size: 0.8rem;
    }
  }
`;
