import Navbar from '../components/layout/Navbar';
import '/styles/global.scss';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  );
}

export default MyApp;
