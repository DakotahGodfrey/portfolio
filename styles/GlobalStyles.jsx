import { createGlobalStyle } from 'styled-components';
import { getFromTheme } from './themes';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${getFromTheme('BG')};
    color: ${getFromTheme('primary')};
    a{
      color: ${getFromTheme('link')};
    }
    .cta{
      padding: 1rem 3rem;
      display: flex;
      font-size: ${getFromTheme('headingSM')};
      justify-content: space-evenly;
    a{
      display: block;
      padding: .25rem 1rem;
      transition: all 0.5s ease-out;
      color: ${getFromTheme('primary')};
      border-bottom: 2px solid ${getFromTheme('accent')};
      &:hover{
        transform: scale(1.1);
      }

    }
    
    }
  `;

export default GlobalStyles;
