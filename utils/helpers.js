import { BLOG_URL, GITHUB_URL } from '../api/api';

const getRecentPostExcerpts = async (limit = 3) => {
  const blogQuery = `
    query Articles {
      articles(limit: ${limit}, sort:"published_at:desc"){
        title
        description
        slug
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
    body: JSON.stringify({ query: blogQuery }),
  });
  const posts = await res.json();
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

const getPostExcerptsAndCategories = async () => {
  const blogQuery = `
    query {
      articles( sort:"published_at:desc"){
        title
        description
        slug
        category{
          title
        }
        image{
          url
        }
      }
      categories{
        title
      }
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
  const articles = posts.data.articles ?? [];
  const categories = posts.data.categories ?? [];
  return { articles, categories };
};

const getPinnedRepos = async () => {
  const pinnedReposQuery = `
    query {
    user(login:"dakotahgodfrey") {
        pinnedItems(first: 3, types: [REPOSITORY, GIST]) {
            totalCount
            edges {
                node {
                    ... on Repository {
                    name
                    url
                    description
                    primaryLanguage{
                      name
                      color
                      }
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
