import React, { useState } from "react";
import { useLocation, useRoute } from "wouter";
import { useTheme } from "../../../contexts/theme";
import { SidebarContainer, NavList, NavItem, NavItemText } from "./styles";
import { FaHome, FaBars, FaUser, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { useUserContext } from "../../../contexts/user";

const Sidebar: React.FC = () => {
  const { logout } = useUserContext();
  const [, setLocation] = useLocation();
  const [currentPageIsHome] = useRoute("/home");
  const [currentPageIsProfile] = useRoute("/profile");
  const { theme, toggleTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <nav>
        <NavList>
          <NavItem onClick={() => setIsExpanded(!isExpanded)}>
            <FaBars />
            <NavItemText isExpanded={isExpanded}>Menu</NavItemText>
          </NavItem>

          <NavItem isSelected={currentPageIsHome} onClick={() => setLocation("/home")}>
            <FaHome />
            <NavItemText isExpanded={isExpanded}>Home</NavItemText>
          </NavItem>

          <NavItem isSelected={currentPageIsProfile} onClick={() => setLocation("/profile")}>
            <FaUser />
            <NavItemText isExpanded={isExpanded}>Profile</NavItemText>
          </NavItem>

          <div style={{ marginTop: "auto" }}>
            <NavItem onClick={toggleTheme}>
              {theme.title === "light" ? <FaMoon /> : <FaSun />}
              <NavItemText isExpanded={isExpanded}>Toggle theme</NavItemText>
            </NavItem>

            <NavItem onClick={logout}>
              <FaSignOutAlt />
              <NavItemText isExpanded={isExpanded}>Logout</NavItemText>
            </NavItem>
          </div>
        </NavList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
