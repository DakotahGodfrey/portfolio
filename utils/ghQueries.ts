import { GITHUB_URL } from "./endpoints";

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

export const getPinnedRepos = async () => {
  const query = `
query {
   user(login:"dakotahgodfrey"){
      pinnedItems(first: 3, types: [REPOSITORY, GIST]){
         totalCount
         edges{
            node{
               ... on Repository{
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

  const res = await fetch(GITHUB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PRIVATE_API_KEY}`,
    },
    body: JSON.stringify({ query }),
  });
  const repos = await res.json();
  console.log(repos, "Repo Res");
  const reposArr: [Repo] = repos.data.user.pinnedItems.edges.map(
    (node: Repo) => node
  );
  return reposArr;
};
