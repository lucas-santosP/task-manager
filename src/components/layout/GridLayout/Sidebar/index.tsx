import React, { useState } from "react";
import { useLocation, useRoute } from "wouter";
import { SidebarContainer, NavList, NavItem, NavItemText } from "./styles";
import { useTheme } from "../../../../contexts/theme";
import store from "../../../../store";
import {
  HiOutlineMenu,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineLogout,
} from "react-icons/hi";

const Sidebar: React.FC = () => {
  const [, setLocation] = useLocation();
  const [currentPageIsHome] = useRoute("/home");
  const [currentPageIsProfile] = useRoute("/profile");
  const { theme, toggleTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <nav>
        <NavList>
          <NavItem title="Menu" onClick={() => setIsExpanded(!isExpanded)}>
            <HiOutlineMenu />
            <NavItemText isExpanded={isExpanded}>Menu</NavItemText>
          </NavItem>

          <NavItem title="Home" isSelected={currentPageIsHome} onClick={() => setLocation("/home")}>
            <HiOutlineHome />
            <NavItemText isExpanded={isExpanded}>Home</NavItemText>
          </NavItem>

          <NavItem
            title="Profile"
            isSelected={currentPageIsProfile}
            onClick={() => setLocation("/profile")}
          >
            <HiOutlineUser />
            <NavItemText isExpanded={isExpanded}>Profile</NavItemText>
          </NavItem>

          <div style={{ marginTop: "auto" }}>
            <NavItem title="Toggle theme" onClick={toggleTheme}>
              {theme.title === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
              <NavItemText isExpanded={isExpanded}>Toggle theme</NavItemText>
            </NavItem>

            <NavItem title="Logout" onClick={() => store.userStore.logout()}>
              <HiOutlineLogout />
              <NavItemText isExpanded={isExpanded}>Logout</NavItemText>
            </NavItem>
          </div>
        </NavList>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;
