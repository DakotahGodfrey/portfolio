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
  max-width: 80rem;
  background: ${getFromTheme('secondary')};
  margin-inline: auto;
  section {
    padding: 1rem 3rem;
    h2 {
      font-size: ${getFromTheme('headingMD')};
    }
    p {
      font-size: ${getFromTheme('headingSM')};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  border-top: 2px solid ${getFromTheme('accent')};
  max-width: 80rem;
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
