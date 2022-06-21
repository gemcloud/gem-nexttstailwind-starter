import * as React from "react";
import { Theme, ThemeContextType } from "@/components/demoThemes/theme"
import { ReactNode } from "react";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

type Props = {
  children?: ReactNode;
};

function ThemeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = React.useState<Theme>("light");
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
