import React from 'react';
import { getBlogPosts } from '../utils/helpers';

export const Blog = ({ posts }) => {
  console.log(posts);
  return <></>;
};

export async function getStaticProps() {
  return await getBlogPosts();
}

export default Blog;
