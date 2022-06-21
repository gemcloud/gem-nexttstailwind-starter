// Creadit: https://github.com/pacocoursey/next-themes
// https://blog.logrocket.com/how-to-use-react-context-typescript/
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
import type {
  UseThemeProps,
  ThemeProviderProps,
  Theme,
  ThemeContextType,
} from "./typesTheme";

// export const GemThemeContext = createContext();
export const GemThemeContext = createContext<ThemeContextType | undefined>(
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

  // const [theme, setTheme] = React.useState(storedColour);
  // const [themeMode, setThemeMode] = React.useState(storedColour);
  const [themeMode, setThemeMode] = React.useState<Theme>("light");
  //const [theme, setTheme] = useState(() => getTheme(storageKey, defaultTheme));

  return (
    <GemThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </GemThemeContext.Provider>
  );
}
