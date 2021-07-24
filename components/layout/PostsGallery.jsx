import React from 'react';
import { GridWrapper } from './Lib';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFromTheme } from '../../styles/themes';
import Link from 'next/link';
import placeholder from '/public/images/placeholder.svg';

const PostFigure = styled.figure`
  padding: 0 0 1rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  > div {
    margin-bottom: 1.6rem;
    position: relative;
    padding-bottom: 0.5rem;
    height: 17.5rem;
  }
  img {
    border-radius: 5px;
    border: 1px solid #eee;
  }
  figcaption {
    font-size: ${getFromTheme('body')};
  }
  h3 {
    font-size: ${getFromTheme('headingMD')};
  }
`;

const PostCard = ({ post }) => {
  return (
    <PostFigure>
      <div>
        <Image
          src={post.image ? post.image?.url : placeholder}
          alt={post.title}
          layout='fill'
          objectFit='cover'
          objectPosition='center center'
          quality={75}
        />
      </div>
      <h3>
        {post.slug ? (
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        ) : (
          post.title
        )}
      </h3>
      <figcaption className='truncate-2'>{post.description}</figcaption>
    </PostFigure>
  );
};

const PostsGallery = ({ posts, isResults, isSearching, results }) => {
  return (
    <section>
      <h2>
        {isResults ? 'Results: ' : isSearching ? 'Searching' : 'Latest Posts'}{' '}
        {results && <span role='alert'>{results}</span>}
      </h2>
      <GridWrapper columns={3} gap={3}>
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
