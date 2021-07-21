import React from 'react';
import { Container } from '../../components/layout/Lib';
import { async } from 'regenerator-runtime';
import { getAllPostSlugs, getPostBySlug } from '../../utils/helpers';

export default function Post({ postData }) {
  return (
    <Container>
      <h2>We made it</h2>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.slug);
  return { props: { postData } };
}

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
