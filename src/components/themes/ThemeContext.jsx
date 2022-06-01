import React from "react";
import { ThemeProvider } from "next-themes";

export const ThemeContext = React.createContext();

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

// import React, { ReactNode } from "react";

// export const ThemeContext = React.createContext();

// // type Props = {
// //   children?: ReactNode;
// // };

// // export default function ThemeContextWrapper({ children }: Props) {
// export default function ThemeContextWrapper({ children }) {
//   const storedColour =
//     typeof window !== "undefined" && localStorage.getItem("theme")
//       ? localStorage.getItem("theme")
//       : "theme-dark";
//   const [theme, setTheme] = React.useState(storedColour);

//   const defaultContext = {
//     theme,
//     setTheme,
//   };

//   return (
//     <ThemeContext.Provider value={defaultContext}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
