import styled from 'styled-components';
import { getFromTheme } from '../../styles/themes';
import { horizontalBounce } from '../../styles/keyframes';
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns ?? 3},
    ${(props) => props.size ?? '1fr'}
  );
  grid-gap: ${(props) => props.gap ?? 1.6}rem;
`;
const Container = styled.main`
  max-width: 100rem;
  background: ${getFromTheme('secondary')};
  margin-inline: auto;
  padding-bottom: 1.6rem;
  ${(props) => !props.isTablet && 'padding: 1rem 3rem;'}
  min-height: 80vh;
  h1 {
    font-size: ${getFromTheme('headingXL')};
    margin-bottom: 1rem;
  }
  section {
    padding: 1rem 3rem;
  }
  .carousel {
    display: flex;
    overflow-x: scroll;
    justify-content: space-between;
    figure {
      flex-shrink: 0;
      width: 25rem;
      margin-right: 1.6rem;
    }
  }
  .top-pods {
    margin-top: 2.8rem;
    figure {
      display: grid;
      grid-template-columns: ${(props) =>
        props.isTablet ? 1 : 'max-content 1fr'};
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
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  border-top: 2px solid ${getFromTheme('accent')};
  max-width: 100rem;
  margin-inline: auto;
  align-items: center;
  font-size: 1.4rem;
  ul {
    display: flex;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.8rem;
      width: 4.8rem;
      border-radius: 50%;
      &:hover {
        background: ${getFromTheme('secondary')};
        svg {
          fill: ${getFromTheme('accent')};
        }
      }
    }
    svg {
      height: 2.8rem;
      width: 2.8rem;
    }
  }
`;

const CategoryButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  position: relative;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  color: ${getFromTheme('primary')};
  font-weight: 700;
  min-width: 8rem;
  height: 4.4rem;
  text-transform: lowercase;
  margin-right: 1.5rem;
  box-shadow: 0 0 0 2px inset ${getFromTheme('primary')};
  transition: box-shadow 0.3s ease-out;
  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    box-shadow: 0 0 0 4px inset ${(props) => props.color};
  }
`;

const SearchForm = styled.form.attrs((props) => ({
  onSubmit: props.onSubmit,
}))`
  padding: 1rem 3rem;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  justify-content: center;
  input {
    width: 100%;
    /* padding: 1rem; */
    font-size: ${getFromTheme('body')};
    border-radius: 50px;
    &::placeholder {
      color: ${getFromTheme('primary')};
    }
  }
  .categories {
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    font-size: ${getFromTheme('body')};
    button {
      margin-bottom: 1rem;
    }
  }
`;

const SiteHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  justify-content: space-between;
  max-width: 100rem;
  margin-inline: auto;
  background-color: ${getFromTheme('secondary')};
  padding: 2rem;
  font-size: ${getFromTheme('headingSM')};
  color: ${getFromTheme('primary')};
  nav{
    display: flex;
    align-items: center;
    grid-column: 1;

  .full-nav {
    display: inherit;
    font-size: ${getFromTheme('headingMD')};
    padding-bottom: 0.25rem;
    border-bottom: 2px solid ${getFromTheme('muted')};
    a {
      display: block;
      color: inherit;
      transition: all 0.4s ease-out;
      padding: 0 0.75rem;
      &:hover {
        text-decoration: none;
      }
    }
    ul{
      display: flex;
    }
    li {
      border-bottom: 2px solid transparent;
      margin-bottom: -0.45rem;
      transition: all 0.4s ease-out;
      &:hover{
        border-color: ${getFromTheme('accent')};
        a{

          transform: scale(1.1);
        }
      }
      &:first-child{
        margin-left: 0.2rem ;
        }
      }
    }
  
  }
  button {
    grid-column: 2;
    display: flex;
    align-items: center;
    min-height 4.4rem;
    padding:0 0.4rem 0.4rem 0.4rem;
    span {
      transition: all 0.4s ease-out;
      border-radius:50px;
      height: 2.4rem;
      width: 2.4rem;
      margin:  0.4rem;
    }
    &:hover{
      cursor: pointer;
      span{
        transform: rotate(45deg);
      }
    }
  }
  .mobile-menu{
    grid-column: 2;
    width: 50%;
    min-width: 25rem;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    box-shadow: 0 2px 4px 1px #000;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${getFromTheme('BG')};
    z-index: 1;
    padding-left: 2rem;
    overflow-y: scroll;
    overflow-x: hidden;
    ul{
      width: 100%;
      position: absolute;
      top: 6rem;
      li{
        margin-bottom: 1rem;
        min-height: 4.4rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #d3d3d3;
        a{
          display: block;
          width: 100%;
          padding: 0.5rem;
          color: ${getFromTheme('primary')};
        }
      }
    }
    button{
      padding: 0;
     
    }
    button.close{
      height: 4.4rem;
      position: fixed;
      top: 2rem;
      right: 1rem;
      width: 4.4rem;
      &:hover{
        svg{
          animation: 2s ${horizontalBounce} ease-in-out infinite;
        }
      }
      svg{
        color: ${getFromTheme('accent')};
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    }
  
`;

const MenuButton = styled.button.attrs((props) => ({
  children: props.children,
  'aria-label': 'open menu',
  'aria-haspopup': true,
}))`
  font-size: ${getFromTheme('headingMD')};
  svg {
    height: 4.4rem;
    width: 4.4rem;
  }
`;

export {
  GridWrapper,
  Container,
  Footer,
  CategoryButton,
  SearchForm,
  SiteHeader,
  MenuButton,
};
