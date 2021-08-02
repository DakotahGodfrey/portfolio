import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container } from '../../components/layout/Lib';
import {
  generatePlaceHolders,
  getPostExcerptsAndCategories,
  queryBlogPostsByTitleAndCategory,
} from '../../utils/helpers';
import { getFromTheme } from '../../styles/themes';
import BlogSearchBar from '../../components/BlogSearchBar';
import PostsGallery from '../../components/layout/PostsGallery';
import useDebounce from '../../utils/hooks/useDebounce';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';

export default function Blog({ articles, categories }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [term, setTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const debouncedTerm = useDebounce(200, term);
  const { width } = useViewport();
  const isMobile = width <= mq.xs;
  const isTablet = width <= mq.sm;

  useEffect(() => {
    if (debouncedTerm) {
      const getResults = async () => {
        setSearching(true);
        setPosts([]);
        setError(null);
        setTimeout(async () => {
          const results = await queryBlogPostsByTitleAndCategory(debouncedTerm);
          if (results.length > 0) {
            setPosts(results);
            setSearching(false);
          } else {
            setSearching(false);
            setError('No results found.');
          }
        }, 450);
      };
      getResults();
    }
    setError(null);
  }, [debouncedTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Blog | Dakotah Godfrey</title>
        <meta
          name='description'
          content='Recent writings by Dakotah Godfrey, a community-taught front-end developer. Posts about learning to code, web development, and more.'
        />
        <meta name='author' content='@dakotah_dev' />
        <meta
          name='keywords'
          content='react, frontend, Toronto, websites, Dakotah'
        />
        <meta property='og:url' content='https://dakotahg.dev/blog' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={`Blog | Dakotah Godfrey`} />
        <meta
          property='og:description'
          content='Recent writings by Dakotah Godfrey, a community-taught front-end developer. Posts about learning to code, web development, and more.'
        />
        <meta
          property='og:image'
          content='https://dakotahg.dev/images/blogPreview.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='dakotahg.dev' />
        <meta property='twitter:url' content='https://dakotahg.dev/blog' />
        <meta name='twitter:title' content='Blog | Dakotah Godfrey' />
        <meta
          name='twitter:description'
          content='Recent writings by Dakotah Godfrey, a community-taught front-end developer. Posts about learning to code, web development, and more.'
        />
        <meta
          name='twitter:image'
          content='https://dakotahg.dev/images/blogPreview.png'
        />
      </Head>
      <Container isTablet={isTablet}>
        <BlogSearchBar
          categories={categories}
          setTerm={setTerm}
          handleSubmit={handleSubmit}
          term={term}
          isMobile={isMobile}
          isTablet={isTablet}
        />
        {!debouncedTerm && posts.length === 0 && (
          <PostsGallery
            posts={articles}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        )}
        {searching && (
          <PostsGallery
            isSearching
            posts={generatePlaceHolders(3)}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        )}
        {posts.length > 0 && error === null && (
          <PostsGallery
            isResults
            results={posts.length}
            posts={posts}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        )}
        {error !== null && (
          <PostsGallery
            error={error}
            results={posts.length}
            posts={posts}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        )}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { articles, categories } = await getPostExcerptsAndCategories();
  return {
    props: {
      articles,
      categories,
    },
  };
}
