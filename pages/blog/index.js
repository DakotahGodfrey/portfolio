import React, { useState, useEffect } from 'react';
import { Container } from '../../components/layout/Lib';
import {
  generatePlaceHolders,
  getPostExcerptsAndCategories,
  queryBlogPostsByTitleAndCategory,
} from '../../utils/helpers';
import { getFromTheme } from '../../styles/themes';
import BlogSearchBar from './BlogSearchBar';
import PostsGallery from '../../components/layout/PostsGallery';
import useDebounce from '../../utils/hooks/useDebounce';

export default function Blog({ articles, categories }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [term, setTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const debouncedTerm = useDebounce(200, term);

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
      <Container>
        <BlogSearchBar
          categories={categories}
          setTerm={setTerm}
          handleSubmit={handleSubmit}
          term={term}
        />
        {!debouncedTerm && posts.length === 0 && (
          <PostsGallery posts={articles} />
        )}
        {searching && (
          <PostsGallery isSearching posts={generatePlaceHolders(3)} />
        )}
        {posts.length > 0 && error === null && (
          <PostsGallery isResults results={posts.length} posts={posts} />
        )}
        {error !== null && <p>{error}</p>}
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
