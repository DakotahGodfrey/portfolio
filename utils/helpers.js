import { BLOG_URL, GITHUB_URL } from '../api/api';

const getRecentPostExcerpts = async (limit = 3) => {
  const recentPostQuery = `
    query {
      articles(limit: ${limit}, sort:"published_at:desc"){
        title
        description
        slug
        image{
          url
        }
        category
      }
  `;
  const response = await fetch(BLOG_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: recentPostQuery,
    }),
  });
  const posts = await response.json();
  return posts?.data?.articles;
};

const getAllPostSlugs = async () => {
  const queryAllSlugs = `
    query Articles {
      articles{
        slug
      }
    }
  `;
  const res = await fetch(BLOG_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: queryAllSlugs }),
  });
  const slugs = await res.json();
  return slugs?.data?.articles.map(({ slug }) => slug);
};

const getPostBySlug = async (slug) => {
  const queryBySlug = `
    query Articles {
      articles(where: {slug: "${slug}"}){
        title
        description
        content
        writer{
          name
          avatar{
            url
          }
        }
        image{
          url
        }
      }
    }
  `;

  const res = await fetch(BLOG_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryBySlug,
    }),
  });
  const post = await res.json();
  return post?.data?.articles[0];
};

const getPostExcerptsAndCategories = async (limit = 10) => {
  const blogQuery = `
    query {
      articles(limit: ${limit}, sort:"published_at:desc"){
        title
        description
        slug
        image{
          url
        }
        category
      }
      categories{
        title
    }
  `;
  const res = await fetch(BLOG_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: blogQuery }),
  });
  const posts = await res.json();
  return posts?.data?.articles;
};

const getPinnedRepos = async () => {
  const pinnedReposQuery = `
    query {
     user(login: "dakotahgodfrey") {
       pinnedItems(first: 3, types: [REPOSITORY]){
         edges {
           node {
             ... on Repository {
              name
              description
              url
              primaryLanguage{
                name
                color
              }
            }
          }
        }
      }
    }
  `;
  const res = await fetch(`${GITHUB_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PRIVATE_API_KEY}`,
    },
    body: JSON.stringify({ query: pinnedReposQuery }),
  });

  const repos = await res.json();
  const reposArr = repos.data.user.pinnedItems.edges.map(({ node }) => node);
  return reposArr;
};

export {
  getRecentPostExcerpts,
  getAllPostSlugs,
  getPostBySlug,
  getPostExcerptsAndCategories,
  getPinnedRepos,
};
