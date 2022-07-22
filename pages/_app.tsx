import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import "@styles/reset.scss";
import { SiteFooter, Navbar } from "@components/.";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
      <SiteFooter />
    </ThemeProvider>
  );
}

export default MyApp;
