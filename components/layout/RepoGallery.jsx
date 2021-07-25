import React from 'react';
import styled from 'styled-components';
import { GridWrapper } from './Lib';
import { getFromTheme } from '../../styles/themes';
import { VscRepo } from 'react-icons/vsc';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';

const RepoCard = styled.figure`
  background: ${getFromTheme('BG')};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-gap: 5px;
  padding: 2rem 1rem;
  width: 100%;
  border-radius: 5px;
  a {
    font-size: ${getFromTheme('headingMD')};
    text-overflow: ellipsis;
    overflow: hidden;
  }
  p {
    font-size: 1.6rem;
    color: ${getFromTheme('muted')};
    padding: 0.5rem;
  }

  .repo-url {
    display: flex;
    align-items: center;
    svg {
      height: 2.6rem;
      width: 2.6rem;
      margin-right: 1rem;
    }
  }
  .repo-lang {
    grid-row: 3;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    div {
      border-radius: 100%;
      height: 1.6rem;
      width: 1.6rem;
      margin-right: 1rem;
    }
  }
`;

const RepoGallery = ({ repos }) => {
  const { width } = useViewport();
  const isMobile = width <= mq.xs;
  const isTablet = width <= mq.md;
  const isCarousel = width <= mq.md2;
  return (
    <section>
      <h2>Featured Repos</h2>
      {!isCarousel && (
        <GridWrapper columns={isMobile ? 1 : isTablet ? 2 : 3}>
          {repos.map((repo) => (
            <RepoCard key={repo.name}>
              <div className='repo-url'>
                <VscRepo />
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='truncate'
                  href={repo.url}
                >
                  {repo.name}
                </a>
              </div>
              {repo.description && (
                <p className='truncate-2'>{repo.description}</p>
              )}
              <div className='repo-lang'>
                <div
                  style={{ backgroundColor: `${repo.primaryLanguage.color}` }}
                ></div>{' '}
                {repo.primaryLanguage.name}
              </div>
            </RepoCard>
          ))}
        </GridWrapper>
      )}
      {isCarousel && (
        <div className='carousel'>
          {repos.map((repo) => (
            <RepoCard key={repo.name}>
              <div className='repo-url'>
                <VscRepo />
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='truncate'
                  href={repo.url}
                >
                  {repo.name}
                </a>
              </div>
              {repo.description && (
                <p className='truncate-2'>{repo.description}</p>
              )}
              <div className='repo-lang'>
                <div
                  style={{ backgroundColor: `${repo.primaryLanguage.color}` }}
                ></div>{' '}
                {repo.primaryLanguage.name}
              </div>
            </RepoCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default RepoGallery;
