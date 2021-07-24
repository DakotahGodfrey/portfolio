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
    .post-content {
      h1 {
        font-size: ${getFromTheme('headingLG')};
      }
      h3 {
        font-size: ${getFromTheme('headingMD')};
      }
      h4 {
        font-size: ${getFromTheme('headingMD')};
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      ol,
      ul,
      table {
        margin: 1.6rem auto;
        max-width: 76rem;
      }
      ul,
      ol {
        font-size: ${getFromTheme('headingSM')};
        padding-left: 2rem;
        list-style-type: disc;
      }
      ol {
        list-style-type: decimal;
      }
      li {
        margin-bottom: 1.4rem;
      }
      table {
        border-collapse: collapse;
        th {
          font-size: ${getFromTheme('headingSM')};
          text-align: left;
        }
        td {
          font-size: ${getFromTheme('body')};
        }
        th,
        td {
          padding-left: 1rem;
          &:not(:last-child) {
            border-right: 1px solid ${getFromTheme('accent')};
            padding-right: 1rem;
          }
        }
        thead {
          border-bottom: 1px solid ${getFromTheme('accent')};
        }
        tr:first-child {
          td {
            padding-top: 1rem;
          }
        }
      }
      pre.prism-code {
        font-size: 1.6rem;
        border-radius: 10px;
        border: none;
        background: ${getFromTheme('codeBG')};
        max-width: 76rem;
        margin: 2rem auto;

        code {
          font-family: 'JetBrains Mono', monospace !important;
        }
        .token.function {
          color: orange;
        }
      }
      p{
        margin-bottom: 1.8rem;
      }
    }
    .top-pods {
    margin-top: 2.8rem;
    figure {
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-gap: 2rem;

      iframe {
        align-self: center;
      }
      figcaption {
        align-self: flex-start;
        h3 {
          font-size: ${getFromTheme('headingSM')};
          border-bottom: 1px solid ${getFromTheme('accent')};
        }
        p {
          max-width: 95%;
          /* margin-inline: auto; */
          font-size: ${getFromTheme('body')};
          padding-top: 2rem;
        }
      }
    }
    .post-figure {
      padding: 2rem;
      figCaption {
        text-align: center;
        font-size: 1.4rem;
        color: ${getFromTheme('muted')};
      }
    }
    }
    .post-title {
    font-size: ${getFromTheme('headingXL')};
    text-align: center;
    }
    .about-title {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 3rem;
    }
    .courses {
    margin-top: 2.4rem;
      div {
        max-width: 80rem;
      }
      div:not(:first-child) {
        margin-top: 1.6rem;
      }
    h3 {
      font-size: ${getFromTheme('headingSM')};
    }
    p,
    a {
      font-size: 1.8rem;
    }
  }
    .image-wrapper {
      position: relative;
      width: 100%;
      height: 45vh;
      margin: 2rem auto;
      border-radius: 5px;
      img {
        border-radius: 10px;
      }
    }
      .contact-lead{
        max-width: 70ch;
      }
    .contact-grid{
      align-items: flex-start;
      color: ${getFromTheme('primary')};
      h2{
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${getFromTheme('primary')};
      }
    }
    .contact-form{
      label{
        display: block;
        font-size: ${getFromTheme('headingSM')}
      }
      
    }
    textarea{
      height: 12.5rem;
      overflow-y: scroll;
    }
    .control-group{
      padding-bottom:0.8rem;
    }
    }
    .contact-links{
      font-size: ${getFromTheme('headingSM')};
      li{
        margin-bottom: 3.8rem;
    }
    }
    input, textarea{
        width: 80%;
        font-size: ${getFromTheme('body')};
        background: ${getFromTheme('BG')};
        border: none;
        padding: 1rem;
        border-radius: 1rem;
        color: ${getFromTheme('primary')};
        &:focus{
          outline:none;
          box-shadow: 0 0 0 2px #88b8ff;
          background: ${getFromTheme('secondary')};
        }
        resize: none
    }
  `;

export default GlobalStyles;
