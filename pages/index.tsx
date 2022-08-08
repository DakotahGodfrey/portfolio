/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Intro, RepoCarousel, BlogPreviews } from "components/";
import { MainWrapper } from "components/Containers";
import { getPinnedRepos, getArticleExcerpts } from "utils/";

const Home: NextPage = ({
  repos,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const greeting = "Hi Welcome To My Portfolio";
  return (
    <div>
      <Head>
        <title>dg_dev</title>
        <meta name='description' content='' />
      </Head>
      <MainWrapper>
        <Intro heading={greeting}>
          <p>
            Welcome, my name is Dakotah Godfrey and I'm a community-taught
            frontend developer from Toronto, Canada. I enjoy working on projects
            that make the web a more inclusive and accessible space. I feel web
            accessibility is an increasingly important topic given how many of
            us rely on websites and apps to perform cruical daily tasks.
          </p>
          <p>
            Feel free to look through my past and current projects, and if you
            have a project you'd like to work together on{" "}
            <a href=''>drop me a line here</a>
          </p>
        </Intro>
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
