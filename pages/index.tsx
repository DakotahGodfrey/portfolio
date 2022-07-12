import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme, getFromTheme } from "../styles/theme";
import { Repo } from "../types";
import { getPinnedRepos } from "../utils/ghQueries";

const Home: NextPage = ({
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Head>
          <title>dg_dev</title>
          <meta name='description' content='' />
        </Head>

        <main>
          <ul>
            {repos.map(({ node }: Repo) => (
              <li key={node.name}>{node.name}</li>
            ))}
          </ul>
        </main>

        <footer></footer>
      </div>
    </ThemeProvider>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const repos = await getPinnedRepos();
  console.log(repos);
  return {
    props: {
      repos,
    },
  };
};
export default Home;
