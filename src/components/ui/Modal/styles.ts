import styled, { css } from "styled-components";
import { shade, lighten } from "polished";
import { breakPoints } from "../../../styles/shared";
import { flexCenter, baseTransition } from "../../../styles/mixins";
import { fadeInAnimation, zoomInAnimation } from "../../../styles/animations";

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
  padding: 1rem 2rem;
  width: 100%;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 0 3px 0 #000;
  border-radius: 4px;
  animation: ${zoomInAnimation} 0.2s ease;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: ${theme.colors.background};
      box-shadow: 0 0 3px 0 #c1c1c1;
    `}
  @media
    (max-width: ${breakPoints.xs}) {
    top: 50%;
    width: calc(100% - 16px);
  }
`;

export const ModalHeader = styled.header`
  ${flexCenter}
  position: relative;
  text-align: center;

  .title {
    font-size: 1.5rem;
  }

  .btn-close {
    ${flexCenter}
    ${baseTransition}
    position: absolute;
    top: 45%;
    left: 100%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    font-weight: bold;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;

    &:hover {
      border-radius: 25px;
      background-color: ${({ theme }) =>
        theme.title === "light"
          ? shade(0.15, theme.colors.background)
          : lighten(0.15, theme.colors.background)};
    }
  }
`;

export const ModalMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem 0.2rem;
  padding-bottom: 0.5rem;
  font-size: 18px;
`;
