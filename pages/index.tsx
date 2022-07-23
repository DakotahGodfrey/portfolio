import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Intro, RepoCarousel, BlogPreviews } from "components/";
import { MainWrapper } from "components/Containers";
import { getPinnedRepos, getArticleExcerpts } from "utils/";

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
      <MainWrapper>
        <Intro />
        <RepoCarousel repos={repos} />
        <BlogPreviews articles={articles} />
      </MainWrapper>
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
