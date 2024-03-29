/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import { Container, GridWrapper } from '../../components/layout/Lib';
import RepoGallery from '../../components/layout/RepoGallery';
import { getPinnedRepos } from '../../utils/helpers';
import Bio from '../../components/layout/Bio';
import TopPods from '../../components/layout/TopPods';
import { podcasts } from '../../utils/data';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';

export default function About({ repos }) {
  const { width } = useViewport();
  const isMobile = width < mq.xs;
  const isTablet = width < mq.sm;

  return (
    <>
      <Head>
        <title>Dakotah Godfrey | About</title>
        <meta
          name='description'
          content="I'm a frontend developer, who builds awesome things with React and JavaScript.  Contact me to help you build your next project."
        />
        <meta name='author' content='@dakotah_dev' />
        <meta
          name='keywords'
          content='react, frontend, Toronto, about, Dakotah'
        />
        <meta property='og:url' content='https://dakotahg.dev/about' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={`About | Dakotah Godfrey`} />
        <meta
          property='og:description'
          content="I'm a frontend developer, who builds awesome things with React and JavaScript.  Contact me to help you build your next project."
        />
        <meta
          property='og:image'
          content='https://dakotahg.dev/images/aboutPreview.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='dakotahg.dev' />
        <meta property='twitter:url' content='https://dakotahg.dev/about' />
        <meta name='twitter:title' content='About | Dakotah Godfrey' />
        <meta
          name='twitter:description'
          content="I'm a frontend developer, who builds awesome things with React and JavaScript.  Contact me to help you build your next project."
        />
        <meta
          name='twitter:image'
          content='https://dakotahg.dev/images/aboutPreview.png'
        />
      </Head>
      <Container isTablet={isTablet}>
        <h1 className='about-title'>
          Hey! I'm Dakotah <span className='wave'>👋</span>
        </h1>
        <Bio />
        <RepoGallery repos={repos} />
        <section className='top-pods'>
          <h2>
            <span aria-hidden='true'>🎧</span> What I'm Listening To
          </h2>
          <TopPods podcasts={podcasts} isTablet={isTablet} />
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
