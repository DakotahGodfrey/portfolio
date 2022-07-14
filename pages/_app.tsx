import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import "/styles/reset.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
