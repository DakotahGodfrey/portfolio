import React from 'react';
import { Container } from '../../components/layout/Lib';
import { getPostExcerptsAndCategories } from '../../utils/helpers';

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <>
      <Container>
        <form className='blog-search'>
          <input type='search' placeholder='Search my blogposts' />
        </form>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPostExcerptsAndCategories();
  return {
    props: {
      posts,
    },
  };
}
