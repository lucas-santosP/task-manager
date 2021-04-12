import styled, { css } from "styled-components";
import { shade, lighten } from "polished";
import {
  fadeInAnimation,
  zoomInAnimation,
  flexCenter,
  baseTransition,
  breakPoints,
} from "../../../styles/shared";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 15;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => (theme.title === "light" ? "#0000004d" : "#00000087")};
  transform: all 0.5s ease;
  animation: ${fadeInAnimation} 0.2s ease;
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 20;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  padding-top: 1rem;
  width: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 3px 0 #000;
  border-radius: 10px;
  animation: ${zoomInAnimation} 0.2s ease;

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      box-shadow: 0 0 3px 0 #c1c1c1;
    `}

  @media (max-width: ${breakPoints.xl}) {
    top: 50%;
  }
`;

export const ModalHeader = styled.header`
  ${flexCenter}
  position: relative;
  font-size: 1.2rem;
  text-align: center;

  .btn-close {
    ${flexCenter}
    ${baseTransition}
    position: absolute;
    top: 45%;
    left: 100%;
    transform: translateY(-50%);
    padding: 0.5rem;
    background-color: transparent;
    font-weight: bold;
    font-size: inherit;
    color: inherit;
  }

  .btn-close:hover {
    border-radius: 25px;
    background-color: ${({ theme }) =>
      theme.title === "light"
        ? shade(0.15, theme.colors.background)
        : lighten(0.15, theme.colors.background)};
  }
`;

export const ModalMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem 0.2rem;
  font-size: 18px;
`;
