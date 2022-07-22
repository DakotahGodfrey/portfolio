import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import "@styles/reset.scss";
import { SiteFooter, Navbar } from "@components/.";
import { Provider } from "react-redux";
import store from "app/store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Navbar />
        <Component {...pageProps} />
        <SiteFooter />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
