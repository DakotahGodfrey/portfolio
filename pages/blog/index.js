import React from 'react';
import { Container } from '../../components/layout/Lib';
import { getRecentBlogPostIntros } from '../../utils/helpers';

export default function Blog({ posts }) {
  return (
    <>
      <Container>
        <h1>Some Text</h1>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getRecentBlogPostIntros(6);
  return {
    props: {
      posts,
    },
  };
}
