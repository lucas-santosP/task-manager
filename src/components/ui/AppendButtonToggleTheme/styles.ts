import styled, { css } from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { fadeInAnimation } from "../../../styles/shared";

export const ButtonContainer = styled.button`
  position: fixed;
  z-index: 10;
  top: 10px;
  right: 5px;
  transform: translateX(60%);
  display: flex;
  align-items: center;
  width: 100px;
  height: 35px;
  border-radius: 9999px;
  padding: 0 0.9rem;

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: ${({ theme }) => theme.colors.yellow};
        `
      : css`
          background-color: ${theme.colors.gray};
        `}

  &:hover {
    .light-icon {
      transform: rotate(180deg);
      filter: brightness(105%);
    }
    .dark-icon {
      transform: scaleX(-1);
      filter: brightness(120%);
    }
  }
`;

export const BaseIconStyles = css`
  width: 20px;
  height: 20px;
  animation: ${fadeInAnimation} 0.5s ease;
  transition: all 0.4s ease;
`;

export const IconLightTheme = styled(FaSun)`
  ${BaseIconStyles}
  color: ${({ theme }) => theme.colors.yellow};
  transition-duration: 0.7s;
`;

export const IconDarkTheme = styled(FaMoon)`
  ${BaseIconStyles}
  color: ${({ theme }) => theme.colors.gray};
`;
