import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SidebarContainer, NavList, NavItem, NavItemText } from "./styles";
import { FaHome, FaBars, FaPlus, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const { toggleTheme, title: themeTitle } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <nav>
        <NavList>
          <NavItem onClick={() => setIsExpanded(!isExpanded)}>
            <FaBars />
            <NavItemText isExpanded={isExpanded}>Menu</NavItemText>
          </NavItem>

          <NavItem>
            <FaHome />
            <NavItemText isExpanded={isExpanded}>Home</NavItemText>
          </NavItem>

          <NavItem>
            <FaPlus />
            <NavItemText isExpanded={isExpanded}>Create template</NavItemText>
          </NavItem>

          <NavItem onClick={toggleTheme}>
            {themeTitle === "light" ? <FaMoon /> : <FaSun />}
            <NavItemText isExpanded={isExpanded}>Toggle theme</NavItemText>
          </NavItem>

          <NavItem>
            <FaSignOutAlt />
            <NavItemText isExpanded={isExpanded}>Logout</NavItemText>
          </NavItem>
        </NavList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
