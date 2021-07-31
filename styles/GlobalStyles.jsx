import { createGlobalStyle } from 'styled-components';
import { horizontalBounce } from './keyframes';
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
      height: 65vh;
      margin: 2rem auto;
      border-radius: 5px;
      img {
        border-radius: 10px;
      }
    }
    .contact-grid{
      align-items: flex-start;
      color: ${getFromTheme('primary')};
      h2{
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${getFromTheme('primary')};
      }
    }
     .contact-lead{
        grid-row: 1;  
        padding: 0 3rem;
        grid-column: 1 /span 2;
      }
    .contact-form{
      label{
        display: block;
        font-size: ${getFromTheme('headingSM')}
      }
      
    }
    .contact-submit{
      font-size: ${getFromTheme('headingSM')};
      display:flex;
      align-items: center;
      cursor: pointer;
      background-color: ${getFromTheme('BG')};
      border:none;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      margin-left: auto;
      transition: background-color 0.4s ease-in-out;
      &:hover, &:focus{
        outline: none;
        box-shadow: 0 0 0 2px #88b8ff;
        -webkit-box-shadow: 0px 0px 0 2px  #88b8ff;
        background-color: transparent;
        svg{

        animation: ${horizontalBounce} 1s ease-in-out infinite;
        }
      }
      svg{margin-left: 1rem }
    }
    .submitted-message{
      h2{
        display: flex;
        align-items: center;
      svg{
        color: ${getFromTheme('success')};
        margin-left: 1.6rem;
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
        width: 100%;
        font-size: ${getFromTheme('body')};
        background: ${getFromTheme('BG')};
        border: none;
        padding: 1rem;
        border-radius: 1rem;
        color: ${getFromTheme('primary')};
        font-family: 'Nunito', sans-serif;
        &:focus, &:active{
          outline:none;
          box-shadow: 0 0 0 2px #88b8ff;
          -webkit-appearance: none;
          -webkit-box-shadow: 0px 0px 0 2px  #88b8ff;
          background: ${getFromTheme('secondary')};
        }
        resize: none
    }
    .project{
      display: grid;
      grid-template-columns: 2fr 1fr;
      figcaption{
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .image-wrapper{
        height: 66vh
      }
      h2{
        font-size: ${getFromTheme('headingLG')};
        padding-bottom: 2rem;
      }
      .stack{
        padding: 1rem 0;
        width: 90%;
        border-top: 1px solid ${getFromTheme('accent')};
      }
      .project-links{
        font-size: ${getFromTheme('body')};
        display: grid;
        padding: 1rem;
        grid-template-columns: 1fr 1fr;
        li{
          display: flex;
          align-items: center;
          svg{
            height: 2.8rem;
            width: 2.8rem;
            margin-right: 1.2rem;
          } 
        a{
          font-weight: 700;
          font-size: ${getFromTheme('headingSM')};
          font-family: "Nunito Sans", sans-serif;
        }
        }
      }
    }
  `;

export default GlobalStyles;
