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
  padding: 1rem 3rem;
  min-height: 80vh;
  h1 {
    font-size: ${getFromTheme('headingXL')};
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
    padding: 1rem;
    font-size: ${getFromTheme('body')};
    border-radius: 50px;
    background: ${getFromTheme('BG')};
    border: 2px solid #d3d3d3;
    padding-left: 2rem;
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

export { GridWrapper, Container, Footer, CategoryButton, SearchForm };
