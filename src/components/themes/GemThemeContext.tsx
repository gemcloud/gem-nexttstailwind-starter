// Creadit: https://github.com/pacocoursey/next-themes
import React, {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  memo,
  ReactNode,
} from "react";
import type { UseThemeProps, ThemeProviderProps } from "./typesTheme";

// export const GemThemeContext = createContext();
export const GemThemeContext = createContext<UseThemeProps | undefined>(
  undefined
);

type Props = {
  children?: ReactNode;
};
export default function ThemeContextWrapper({ children }: Props) {
  const storedColour =
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "theme-dark";
  const [theme, setTheme] = React.useState(storedColour);

  const defaultContext = {
    theme,
    setTheme,
    //themes: enableSystem ? [...themes, "system"] : themes,
  };

  return (
    <GemThemeContext.Provider value={defaultContext}>
      {children}
    </GemThemeContext.Provider>
  );
}
