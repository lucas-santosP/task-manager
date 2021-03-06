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
    lg: "2rem",
    xl: "2.5rem",
  },
  fontFamily: {
    primary: "'Roboto', sans-serif",
    secondary: "'Inter', sans-serif",
    mono: "'Roboto Mono', monospace",
  },
  colors: {
    highlight: "#FF8484",
    blue: "#2374ab",
    green: "#73d75d",
    purple: "#5b2a86",
    gray: "#5c5c5c",
    yellow: "#f6e75c",
    red: "#ff5757",
    lightGray: "#f5f5f5",
  },
};

export const light = {
  ...baseTheme,
  title: "light",
  colors: {
    ...baseTheme.colors,
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
    ...baseTheme.colors,
    primary: "#333",
    secondary: "#FFFBEB",
    background: "#222",
    text: "#f5f5f5",
  },
};
