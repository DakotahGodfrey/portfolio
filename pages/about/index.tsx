/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { RepoCarousel } from "components/";
import { MainWrapper } from "components/Containers";
import { getPinnedRepos } from "utils/";
import Link from "next/link";
import styled from "styled-components";

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
      </Head>
      <MainWrapper>
        <section className='bio'>
          <h1>
            <Emoji>👋</Emoji> Hey There, I'm Dakotah!
          </h1>
          <p>
            I'm a community-taught web developer from Toronto, Canada 🦝 🇨🇦 .
            I've focused on building a solid foundation to be a front-end
            developer. I'm well versed in HTML, CSS/SCSS, JavaScript, and
            React.js. Recently I've also been working with PostgreSQL, GraphQL,
            and Next.js, to build faster and better web applications. You can
            always view my latest work in the repos below.
          </p>
          <RepoCarousel repos={repos} />
          <p>
            Before the Covid-19 epidemic, I was working in the hospitality
            industry in Toronto. As work became scarce, I started to think about
            a career change. So I started to teach myself to code. Through
            resources like Codecademy and a number of online tutorials from
            awesome creators like Jason Lengstorf, Kent C. Dodds, Ali Spittel,
            Emma Bostian, Jhey Dev and many others, I found my love for
            programming. My goal is to help make the tech community and the web
            as a whole, even more accessible. I'd love to help others learn to
            code and break into the tech industry. I aim to reach a spot where I
            can give back a little of what I've gained from the dev community
            and help people grow.
          </p>
          <p>
            At the moment I'm looking for a fulltime frontend development role.
            I want to continue to grow my skill set, working in a team
            environment. If you'd like to get in touch about an opportunity,
            please feel free to reach out. I love to talk!{" "}
            <Link href={"/contact"}>Contact me.</Link>
          </p>
        </section>
        <section className='reccomends'>
          <h2>Resources For Learners</h2>
          <ul>
            <li>
              <Emoji>🎓</Emoji>
              <Link href={"/about/contact"}>Courses I reccomend</Link>
            </li>
            <li>
              <Emoji>🎧</Emoji>
              <Link href={"/about/contact"}>Podcasts for Coders</Link>
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
