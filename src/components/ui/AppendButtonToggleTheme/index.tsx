import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonContainer, IconDarkTheme, IconLightTheme } from "./styles";

const AppendButtonToggleTheme: React.FC = () => {
  const { toggleTheme, title: themeTitle } = useContext(ThemeContext);

  return (
    <ButtonContainer
      onClick={toggleTheme}
      title={`Toggle to theme ${themeTitle === "dark" ? "light" : "dark"}`}
    >
      {themeTitle === "light" ? (
        <IconDarkTheme className="dark-icon" />
      ) : (
        <IconLightTheme className="light-icon" />
      )}
    </ButtonContainer>
  );
};
export default AppendButtonToggleTheme;
