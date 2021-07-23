/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import { Container, GridWrapper } from '../../components/layout/Lib';
import RepoGallery from '../../components/layout/RepoGallery';
import { getPinnedRepos } from '../../utils/helpers';
import Bio from './Bio';
import TopPods from './TopPods';
const podcasts = [
  {
    title: 'Ladybug Podcast',
    src: 'https://open.spotify.com/embed/show/1KBO1tSnm0XRlEILmqt7Em',
    description:
      "Ladybug is a podcast created by Emma Bostian, Kelly Vaughan, Sidney Buckner and Ali Spittel - 4 extremely talented software devs who bring a fresh perspective to the tech-podcasting world. Whether you're just starting out on your development or are trying to stay on topof the latest in the industry, this podcast is for you.",
  },
  {
    title: 'ShopTalk',
    src: 'https://open.spotify.com/embed/show/2PUoQB330ft0sTzSNoCPrH',
    description:
      "Hosted by Chris Coyier, and Dave Rupert Shoptalk is a podcast about just building websites - both Chris and Dave are well known in their fields. I highly reccomend this for anyone who is interested in web development. I've picked up quite a few tricks from this podcast.",
  },
  {
    title: 'CodeNewbie',
    src: 'https://open.spotify.com/embed/show/3rwr9GdoHxMWF8yZhsBzHn',
    description: `CodeNewbie is one my favorite tech podcasts. Hosted by Saron Yitbarek, Every week CodeNewbie interviews one person on their path to becoming a developer. They talk about their journey, their experiences, and their future plans. CodeNewbie guests come from all over the tech industry, I've found it's a great way to learn about different aspects of the world of tech.`,
  },
];

export default function About({ repos }) {
  return (
    <>
      <Head></Head>
      <Container>
        <h1 className='about-title'>
          Hey! I'm Dakotah <span className='wave'>👋</span>
        </h1>
        <Bio />
        <RepoGallery repos={repos} />
        <section className='top-pods'>
          <h2>
            <span aria-hidden='true'>🎧</span> What I'm Listening To
          </h2>
          <TopPods podcasts={podcasts} />
        </section>
        <section className='courses'>
          <h2>
            <span aria-hidden='true'>🎓</span> Courses I Recommend
          </h2>
          <div>
            <h3>Epic React</h3>
            <p>
              Kent C Dodd's course on React is one of the best out there for
              learning to build beautiful, performant web applications with
              React. it covers the fundamentals of React, including the Virtual
              DOM, React Components, and React Hooks. As well as more advanced
              topics like testing and suspense. With Epic React you'll also
              build an awesome app. To buy the course, visit the link below.
            </p>
            <a href='https://epicreact.dev/' rel='noreferrer' target='_blank'>
              epicreact.dev
            </a>
          </div>
          <div>
            <h3>Just JavaScript</h3>
            <p>
              Created by Dan Abramov - who is also a co-creator of Redux, and
              Create-React-App - and Maggie Appleton a skilled illustrator and
              designer. Just JavaScript aims to rebuild your mental-model of
              JavaScript, it teaches you how to think about your code. You can
              buy it at the link below
            </p>
            <a href='https://justjavascript.com/'>justjavascript.com</a>
          </div>
        </section>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const repos = await getPinnedRepos();
  return {
    props: {
      repos,
    },
  };
}
