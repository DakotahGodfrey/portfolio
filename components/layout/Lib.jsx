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
  section {
    padding: 1rem 3rem;
  }
  .post-title {
    font-size: ${getFromTheme('headingXL')};
    text-align: center;
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
  .post-figure {
    padding: 2rem;
    figCaption {
      text-align: center;
      font-size: 1.4rem;
      color: ${getFromTheme('muted')};
    }
  }
  .post-content {
    p {
      margin: 1.6rem auto;
      max-width: 76rem;
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

export { GridWrapper, Container, Footer };
