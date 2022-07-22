import { Article, ArticleResponse } from "types/";
import { BLOG_URL } from "./endpoints";

export const getArticleExcerpts = async (limit: number = 4) => {
  const query = `query Articles{
      articles(limit: ${limit}, sort:"published_at:desc"){
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
   }`;
  const response = await fetch(BLOG_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const posts: ArticleResponse = await response.json();
  return posts.data.articles;
};
