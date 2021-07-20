import { BLOG_URL } from '../api/api';

const getBlogPosts = async () => {
  const res = await fetch(BLOG_URL);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

export { getBlogPosts };
