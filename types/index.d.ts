export type Repo = {
  node: {
    name: string;
    url: string;
    description: string;
    primaryLanguage: {
      name: string;
      color: string;
    };
  };
};

export type Article = {
  title: string;
  description: string;
  slug: string;
  category: {
    title: string;
    color: string;
  };
  image: {
    url: string;
  };
};
export type ArticleResponse = {
  data: {
    articles: Article[];
  };
};
