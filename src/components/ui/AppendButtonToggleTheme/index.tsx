import React from "react";
import { useTheme } from "../../../contexts/theme";
import { ButtonContainer, IconDarkTheme, IconLightTheme } from "./styles";

const AppendButtonToggleTheme: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <ButtonContainer
      onClick={toggleTheme}
      title={`Toggle to theme ${theme.title === "dark" ? "light" : "dark"}`}
    >
      {theme.title === "light" ? (
        <IconDarkTheme className="dark-icon" />
      ) : (
        <IconLightTheme className="light-icon" />
      )}
    </ButtonContainer>
  );
};
export default AppendButtonToggleTheme;
