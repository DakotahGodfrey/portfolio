import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Intro, Navbar, RepoCarousel, BlogPreviews } from "components/";
import { getFromTheme } from "@styles/theme";
import { getPinnedRepos, getArticleExcerpts } from "utils/";

const Main = styled.main`
  max-width: 100rem;
  background-color: ${getFromTheme("secondary")};
  margin-inline: auto;
  p {
    margin-top: 1rem;
  }
  section {
    padding: 1rem 3rem;
  }
`;

const Home: NextPage = ({
  repos,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>dg_dev</title>
        <meta name='description' content='' />
      </Head>
      <header>
        <Navbar />
      </header>
      <Main>
        <Intro />
        <RepoCarousel repos={repos} />
        <BlogPreviews articles={articles} />
      </Main>

      <footer></footer>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const repos = await getPinnedRepos();
  const articles = await getArticleExcerpts();
  return {
    props: {
      repos,
      articles,
    },
  };
};
export default Home;
