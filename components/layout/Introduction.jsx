import React from 'react';
import styled from 'styled-components';
import { GridWrapper } from './Lib';
import Image from 'next/image';
import profilePicture from '/public/images/headshot.jpg';
import PropTypes from 'prop-types';
import { getFromTheme } from '../../styles/themes';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';

const IntroWrapper = styled.section`
  margin-inline: auto;
  background: ${getFromTheme('secondary')};
  .hero-content {
    align-items: center;
    grid-column: 1 / span 2;
    grid-template-columns: ${(props) =>
      props.isMobile ? '1fr' : '2fr max-content'};
    .intro {
      text-align: ${(props) => props.isMobile && 'center'};
      text-align: ${(props) => props.isNarrow && 'left'};
      h1 {
        font-size: ${getFromTheme('headingLG')};
        margin-bottom: 1.6rem;
      }
      p {
        /* font-size: ${getFromTheme('headingSM')}; */
        margin-top: 1rem;
      }
      a {
        color: ${getFromTheme('link')};
      }
    }
    .headshot {
      padding: 1rem;
      border-radius: 100%;
      align-self: flex-start;
      width: max-content;
      margin-inline: auto;
      img {
        border-radius: 100%;
      }
    }
  }
`;

const image = (
  <div className='headshot'>
    <Image
      src={profilePicture}
      alt='profile picture of the author'
      width={175}
      height={175}
    />
  </div>
);

const Introduction = ({ children, hasImage }) => {
  const { width } = useViewport();
  const isMobile = width <= mq.md;
  const isNarrow = width <= mq.sm;
  return (
    <IntroWrapper isMobile={isMobile} isNarrow={isNarrow}>
      <GridWrapper columns={2} className='hero-content'>
        {hasImage && isMobile && image}
        <div className='intro'>{children}</div>
        {hasImage && !isMobile && image}
      </GridWrapper>
    </IntroWrapper>
  );
};

Introduction.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Introduction;
