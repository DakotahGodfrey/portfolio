import { createGlobalStyle } from 'styled-components';
import { getFromTheme } from './themes';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${getFromTheme('BG')};
    color: ${getFromTheme('primary')};
    a{
      color: ${getFromTheme('link')};
    }
    p{
      font-size: ${getFromTheme('headingSM')};
    }
    section{
      h2{
        margin-bottom: 2.4rem;
        font-size: ${getFromTheme('headingLG')};
      }
    }
    .truncate{
    display: -webkit-box;
    -webkit-line-clamp:  1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 1;
    }
    .truncate-2{
      display: -webkit-box;
      -webkit-line-clamp:  2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-clamp: 2;
    }
  
  `;

export default GlobalStyles;
