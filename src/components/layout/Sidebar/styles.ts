import styled, { DefaultTheme, css } from "styled-components";
import { shade } from "polished";
import { breakPoints } from "../../../styles/shared";

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

export const SidebarContainer = styled.aside<IStyledProps>`
  display: flex;
  flex-direction: column;
  width: ${({ isExpanded }) => (isExpanded ? "250px" : "80px")};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all ease 0.3s;

  nav {
    flex: 1;
  }

  @media (max-width: ${breakPoints.xl}) {
    width: ${({ isExpanded }) => (isExpanded ? "70%" : "50px")};
  }
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const NavItem = styled.li<INavItem>`
  position: relative;
  height: 45px;
  margin: 0.5rem 0;
  transition: all ease 0.3s;
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
    `}

  @media (max-width: ${breakPoints.xl}) {
    margin: 0.2rem 0;
  }

  svg,
  img {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;

    @media (max-width: ${breakPoints.xl}) {
      left: 25px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const NavItemText = styled.span<IStyledProps>`
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
  font-size: 1.1rem;
  white-space: nowrap;
  transition: all ease 0.3s;
  opacity: 0;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      opacity: 1;
      transition-delay: 200ms;
    `};
`;
