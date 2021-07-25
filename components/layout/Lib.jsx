import styled from 'styled-components';
import { getFromTheme } from '../../styles/themes';

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
  ${(props) => !props.isMobile && 'padding: 1rem 3rem;'}
  min-height: 80vh;
  h1 {
    font-size: ${getFromTheme('headingXL')};
    margin-bottom: 1rem;
  }
  section {
    padding: 1rem 3rem;
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
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  color: #fff;
  background: ${(props) => props.color};
  font-weight: 700;
  height: 4.4rem;
  margin-right: 0.5rem;
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
    align-items: center;
    font-size: ${getFromTheme('body')};
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
  ul {
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
`;

const MenuButton = styled.button.attrs((props) => ({
  children: props.children,
}))`
  font-size: ${getFromTheme('headingMD')};
  svg {
    height: 4.4rem;
    width: 4.4rem;
    path{
      color: #e6af5d
    }
    path:last-child {
      color: ${getFromTheme('accent')};
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
