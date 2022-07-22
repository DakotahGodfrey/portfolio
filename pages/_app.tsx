import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import "@styles/reset.scss";
import { SiteFooter, Navbar } from "@components/.";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<"default" | "dark">(
    "default"
  );
  const handleThemeSwitch = (theme: typeof currentTheme) =>
    setCurrentTheme(theme);
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : defaultTheme}>
      <GlobalStyles />
      <Navbar
        currentTheme={currentTheme}
        handleThemeSwitch={handleThemeSwitch}
      />
      <Component {...pageProps} />
      <SiteFooter />
    </ThemeProvider>
  );
}

export default MyApp;
