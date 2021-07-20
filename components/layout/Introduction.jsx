import React from 'react';
import styled from 'styled-components';
import { GridWrapper } from './Lib';
import Image from 'next/image';
import profilePicture from '/public/images/headshot.jpg';
import PropTypes from 'prop-types';
import { getFromTheme } from '../../styles/themes';

const IntroWrapper = styled.section`
  max-width: 80rem;
  margin-inline: auto;
  background: ${getFromTheme('secondary')};
  .hero-content {
    align-items: center;
    grid-column: 1 / span 2;
    grid-template-columns: 2fr max-content;
    padding: 1rem 3rem;
    .intro {
      h1 {
        font-size: ${getFromTheme('headingLG')};
        margin-bottom: 1.6rem;
      }
      p {
        font-size: ${getFromTheme('headingSM')};
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
  return (
    <IntroWrapper>
      <GridWrapper columns={2} className='hero-content'>
        <div className='intro'>{children}</div>
        {hasImage && image}
      </GridWrapper>
    </IntroWrapper>
  );
};

Introduction.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Introduction;
