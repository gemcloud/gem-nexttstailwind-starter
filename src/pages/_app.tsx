import "@/styles/globals.css";
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import "@/styles/colors.css";
import "@/styles/colorhunt.css";

import type { AppProps } from "next/app";
import ThemeContextWrapper from "@/components/themes/ThemeContext";
import ThemeProvider from "@/components/demoThemes/themeContext";
import ThemeWrapper from "@/components/demoThemes/ThemeWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <>
      {/* <ThemeProvider>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </ThemeProvider> */}
      <ThemeContextWrapper>
        <Component {...pageProps} />
      </ThemeContextWrapper>
    </>
  );
}

export default MyApp;
