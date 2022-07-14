import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Intro, Navbar, RepoCarousel, BlogPreviews } from "../components";
import { defaultTheme } from "../styles/theme";
import { getPinnedRepos, getArticleExcerpts } from "../utils";

const Home: NextPage = ({
  repos,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Head>
          <title>dg_dev</title>
          <meta name='description' content='' />
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
          <Intro />
          <RepoCarousel repos={repos} />
          <BlogPreviews articles={articles} />
        </main>

        <footer></footer>
      </div>
    </ThemeProvider>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const repos = await getPinnedRepos();
  const articles = await getArticleExcerpts();
  console.log(articles);
  return {
    props: {
      repos,
      articles,
    },
  };
};
export default Home;
