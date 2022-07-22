import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import "@styles/reset.scss";
import { SiteFooter, Navbar } from "@components/.";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<
    typeof defaultTheme | typeof darkTheme
  >(defaultTheme);
  const handleThemeSwitch = (theme: typeof currentTheme) =>
    setCurrentTheme(theme);
  return (
    <ThemeProvider theme={currentTheme}>
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
