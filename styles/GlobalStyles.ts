import { createGlobalStyle } from "styled-components";
import { getFromTheme } from "./theme";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${getFromTheme("BG")};
    color: ${getFromTheme("primary")};
   }
    a{
      color: ${getFromTheme("link")};
    }
    p{
      font-size: ${getFromTheme("headingSM")};
    }
    section{
      h2{
        margin-bottom: 2.4rem;
        font-size: ${getFromTheme("headingLG")};
      }
    }
    .truncate{
    display: -webkit-box;
    -webkit-line-clamp:  1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 1;
    &-2{
      display: -webkit-box;
    -webkit-line-clamp:  1;
    -webkit-box-orient: vertical;
    overflow: hidden;
      -webkit-line-clamp:  2;
      line-clamp: 2;
    }
    &-3{
      display: -webkit-box;
    -webkit-line-clamp:  1;
    -webkit-box-orient: vertical;
    overflow: hidden;
      -webkit-line-clamp:3;
      line-clamp:3;
    }
  }
  h1{
    font-size: ${getFromTheme("headingLG")};
  }
    h3 {
    font-size: ${getFromTheme("headingSM")};
  }
  .lang-tag{
    span{
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    margin-right: 0.5rem
    }
    font-size: 1.4rem;
    display: inline-flex;
    align-items: center;
    background-color: ${getFromTheme("secondary")};
    max-width: max-content;
    padding: 0.4rem 0.6rem;
    border-radius: 2rem;
  }
  .card {
    background-color: ${getFromTheme("BG")};
    min-width: 27rem;
    margin-right: 1.6rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr max-content;
    gap: 5px;
    padding: 2rem 1rem;
    width: 100%;
    border-radius: 5px;
    align-content: flex-start;
    p {
      font-size: 1.6rem;
      margin-block: auto;
    }
  }`;

export default GlobalStyles;
