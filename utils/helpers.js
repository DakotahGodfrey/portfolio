import { BLOG_URL, GITHUB_URL } from './api';

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
        color
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

const queryBlogPostsByTitleAndCategory = async (query) => {
  const queryString = `
    query {
     byTitle: articles(where: {title_contains:  "${query}"}){
        title
        description
        slug
        category{
            title
            color
        }
        image{
          url
        }
      }
      byCategory: articles(where: {category: {title_contains: "${query}"}}){
          title
        description
        slug
        category{
            title
            color
        }
        image{
          url
        }
      }
    }
  `;

  const response = await fetch(BLOG_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: queryString }),
  });

  const posts = await response.json();
  const { byTitle, byCategory } = posts.data;
  const merged = [...byTitle, ...byCategory];

  const filteredArray = merged.filter(
    (value, index, arr) =>
      arr.findIndex((article) => article.slug === value.slug) === index
  );
  return filteredArray;
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

const getProjects = async () => {
  const projectsQuery = `
    query Projects {
      projects{
        title
        description
        stack
        url
        repo
        cover{
          url
        }
      }
    }`;
  const res = await fetch(BLOG_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: projectsQuery }),
  });
  const projects = await res.json();
  return projects.data.projects;
};

const generatePlaceHolders = (size) => {
  let placeholders = new Array(size).fill({
    title: 'Loading',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, maiores.',
  });
  return placeholders;
};

export {
  getRecentPostExcerpts,
  getAllPostSlugs,
  getPostBySlug,
  getProjects,
  getPostExcerptsAndCategories,
  getPinnedRepos,
  queryBlogPostsByTitleAndCategory,
  generatePlaceHolders,
};
