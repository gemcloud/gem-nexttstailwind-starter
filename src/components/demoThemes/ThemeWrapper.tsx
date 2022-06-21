import React, { ReactNode } from "react";
import { ThemeContextType, Theme } from "@/components/demoThemes/theme";
import { ThemeContext } from "@/components/demoThemes/themeContext";

type Props = {
  children?: ReactNode;
};

function ThemeWrapper ({ children }: Props)  {
  const { theme, changeTheme } = React.useContext(
    ThemeContext
  ) as ThemeContextType;

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <select
        className="Theme-toggler"
        name="toggleTheme"
        onChange={handleThemeChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};

export default ThemeWrapper;
