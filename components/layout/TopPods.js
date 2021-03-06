import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GridWrapper } from './Lib';

const TopPods = ({ podcasts, isTablet }) => {
  return (
    <GridWrapper columns={1} gap={2}>
      {podcasts.map((pod) => (
        <figure
          style={{ gridTemplateColumns: `${isTablet && '1fr'}` }}
          key={pod.title}
        >
          <iframe
            src={pod.src}
            width='100%'
            height='232'
            frameBorder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>
          <figcaption>
            <h3>{pod.title}</h3>
            <p>{pod.description}</p>
          </figcaption>
        </figure>
      ))}
    </GridWrapper>
  );
};

TopPods.propTypes = {
  podcasts: PropTypes.array.isRequired,
};

export default TopPods;
