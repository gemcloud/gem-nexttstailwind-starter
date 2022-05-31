import React from "react";

export const ThemeContext = React.createContext();

// type ButtonLinkProps = {
//   isDarkBg?: boolean;
  
// };

export default function ThemeContextWrapper({ children }) {
  const storedColour =
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "theme-dark";
  const [theme, setTheme] = React.useState(storedColour);

  const defaultContext = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
}
