/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { RepoCarousel } from "components/";
import { FlexContainer, MainWrapper } from "components/Containers";
import { getPinnedRepos } from "utils/";
import Link from "next/link";
import styled from "styled-components";
import { podcastReccomendations } from "@utils/data";
const Emoji = styled.span.attrs((props) => ({ "aria-hidden": "true" }))`
  margin-right: 0.8rem;
`;

const About: NextPage = ({
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>dg_dev | About</title>
        <meta name='description' content='' />
        <script
          src='https://open.spotify.com/embed-podcast/iframe-api/v1'
          async
        ></script>
      </Head>
      <MainWrapper>
        <section>
          <h1>
            <Emoji>🎧</Emoji> Podcasts for New Coders
          </h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          eligendi. Adipisci perspiciatis cum doloribus vitae quod
          exercitationem et possimus quasi! Aliquam at, molestias voluptas eum
          dignissimos dicta id. Repellendus, cupiditate?
          <FlexContainer scrollable>
            <div className='row'>
              {podcastReccomendations.map(({ title, url, description }) => (
                <figure className='card' key={title}>
                  <iframe
                    src={url}
                    width='100%'
                    height='232'
                    frameBorder='0'
                    allow='encrypted-media'
                    allowTransparency={true}
                  ></iframe>
                  <figcaption>
                    <h3>{title}</h3>
                    <p className='truncate-3'>{description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </FlexContainer>
        </section>
        <section className='reccomends'>
          <h2>Resources For Learners</h2>
          <ul>
            <li>
              <Emoji>🎓</Emoji>
              <Link href={"/about/courses"}>Courses I reccomend</Link>
            </li>
            <li>
              <Emoji>👈</Emoji>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </section>
      </MainWrapper>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const repos = await getPinnedRepos();
  return {
    props: {
      repos,
    },
  };
};
export default About;
