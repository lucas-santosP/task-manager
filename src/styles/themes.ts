const baseTheme = {
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "3rem",
    xl: "5rem",
  },
  fontSize: {
    xs: ".75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2.5rem",
    xl: "5rem",
  },
};

export const light = {
  ...baseTheme,
  title: "light",
  colors: {
    primary: "#FF8484",
    secondary: "#FFFBEB",
    background: "#f5f5f5",
    text: "#333",
  },
};

export const dark = {
  ...baseTheme,
  title: "dark",
  colors: {
    primary: "#333",
    secondary: "#FFFBEB",
    background: "#222",
    text: "#f5f5f5",
  },
};
