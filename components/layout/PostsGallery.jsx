import React from 'react';
import { GridWrapper } from './Lib';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFromTheme } from '../../styles/themes';
import Link from 'next/link';
import placeholder from '/public/images/placeholder.svg';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';

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
    &.category-color {
      border-top: 1px solid ${getFromTheme('muted')};
      padding-top: 0.5rem;
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      div {
        background-color: ${(props) => props.categoryColor};
        border-radius: 100%;
        height: 1.6rem;
        width: 1.6rem;
        margin-right: 1rem;
      }
    }
  }
  h3 {
    font-size: ${getFromTheme('headingMD')};
  }
`;

const PostCard = ({ post }) => {
  return (
    <PostFigure categoryColor={post?.category?.color}>
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
      {post.category && (
        <figcaption className='truncate-2 category-color'>
          <div></div>
          {post.category?.title}
        </figcaption>
      )}
    </PostFigure>
  );
};

const PostsGallery = ({
  posts,
  isResults,
  isSearching,
  results,
  isMobile,
  isTablet,
  error,
  columns,
}) => {
  return (
    <section>
      {error ? (
        <>
          <h2>
            <span role='alert'>{error}</span>
          </h2>
          <GridWrapper
            columns={isMobile ? 1 : isTablet ? 2 : columns ? columns : 3}
            gap={3}
          >
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </GridWrapper>
        </>
      ) : (
        <>
          <h2>
            {isResults
              ? 'Results: '
              : isSearching
              ? 'Searching'
              : 'Latest Posts'}{' '}
            {results && <span role='alert'>{results}</span>}
          </h2>
          <GridWrapper
            columns={isMobile ? 1 : isTablet ? 2 : columns ? columns : 3}
            gap={3}
          >
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </GridWrapper>
        </>
      )}
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
