import Navbar from '../components/layout/Navbar';
import '/styles/reset.scss';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { defaultTheme, darkTheme, getFromTheme } from '../styles/themes';
import { useState } from 'react';
import { Footer } from '../components/layout/Lib';
import SocialLinks from '../components/SocialLinks';
import { socialLinks } from '../utils/data';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('default');
  const handleThemeClick = () =>
    setTheme(theme === 'default' ? 'dark' : 'default');

  return (
    <>
      <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
        <GlobalStyles />
        <Navbar handleThemeClick={handleThemeClick} theme={theme} />
        <Component {...pageProps} />
        <Footer>
          <SocialLinks links={socialLinks} />| &copy; dakotah_dev 2021
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
