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
