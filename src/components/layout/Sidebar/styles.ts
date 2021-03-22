import styled, { DefaultTheme } from "styled-components";
import { shade } from "polished";

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
  transition: width ease 0.3s;

  nav {
    flex: 1;
  }
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const NavItem = styled.li<INavItem>`
  position: relative;
  height: 45px;
  margin: 0.5rem 0;
  transition: all ease 0.3s;
  background-color: ${({ theme, isSelected }) => {
    if (!isSelected) return "none";
    return navItemBackground(theme);
  }};

  &:hover {
    cursor: pointer;
    ${({ isSelected }) => (isSelected ? "cursor:default;" : "")}
    background-color: ${({ theme }) => navItemBackground(theme)};
  }

  svg,
  img {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translate(-50%, -50%);
  }
`;

export const NavItemText = styled.span<IStyledProps>`
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
  font-size: 1.2rem;
  white-space: nowrap;
  transition: all ease 0.3s;
  transition-delay: ${({ isExpanded }) => (isExpanded ? "200ms" : "0ms")};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
`;
