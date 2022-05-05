import styled, { DefaultTheme, css } from "styled-components";
import { shade } from "polished";
import { baseTransition } from "../../../../styles/mixins";
import { breakPoints } from "../../../../styles/shared";

interface IStyledProps {
  isExpanded: boolean;
}

interface INavItem {
  isSelected?: boolean;
}

const navItemBackground = (theme: DefaultTheme) => {
  const shadeValue = theme.title == "dark" ? 0.3 : 0.15;
  return shade(shadeValue, theme.colors.primary);
};

const SelectedLeftLine = css`
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 100%;
    width: 4px;
  }
`;

export const SidebarContainer = styled.aside<IStyledProps>`
  ${baseTransition}
  display: flex;
  flex-direction: column;
  width: ${({ isExpanded }) => (isExpanded ? "220px" : "60px")};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};

  nav {
    flex: 1;
  }

  @media (max-width: ${breakPoints.xs}) {
    width: ${({ isExpanded }) => (isExpanded ? "70%" : "50px")};
    padding-bottom: 2.5rem;
    padding-top: 1rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const NavItem = styled.li<INavItem>`
  ${baseTransition}
  position: relative;
  height: 42px;
  margin: 0.2rem 0;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => navItemBackground(theme)};
  }

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      cursor: default;
      background-color: none;
      background-color: ${navItemBackground(theme)};
      ${SelectedLeftLine};
    `}

  svg,
  img {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;

    @media (max-width: ${breakPoints.xs}) {
      left: 25px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const NavItemText = styled.span<IStyledProps>`
  ${baseTransition}
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      opacity: 1;
      transition-delay: 200ms;
    `};

  @media (max-width: ${breakPoints.xs}) {
    left: 55px;
  }
`;
