import React from 'react';
import { GridWrapper } from './Lib';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFromTheme } from '../../styles/themes';
import { BASE_URL } from '../../api/api';

const PostFigure = styled.figure`
  > div {
    margin-bottom: 1rem;
  }
  img {
    border-radius: 20px;
    border: 1px solid #eee;
  }
  figcaption {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 2;
    font-size: ${getFromTheme('body')};
  }
  h3 {
    font-size: ${getFromTheme('headingSM')};
  }
`;

const PostCard = ({ post }) => {
  return (
    <PostFigure>
      <div>
        <Image
          src={`${BASE_URL}${post.cover.formats.medium.url}`}
          alt={post.title}
          width={post.cover.formats.medium.width}
          height={post.cover.formats.medium.height}
          layout='responsive'
          quality={75}
        />
      </div>
      <h3>{post.title}</h3>
      <figcaption>{post.description}</figcaption>
    </PostFigure>
  );
};

const PostsGallery = ({ posts }) => {
  return (
    <section className='recent'>
      <h2>Recent Posts</h2>
      <GridWrapper columns={2} gap={2}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </GridWrapper>
    </section>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

PostsGallery.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsGallery;
