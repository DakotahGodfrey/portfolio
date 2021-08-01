import Head from 'next/head';
import Image from 'next/image';
import Introduction from '../components/layout/Introduction';
import Link from 'next/link';
import { Container, Footer } from '../components/layout/Lib';
import SocialLinks from '../components/SocialLinks';
import { socialLinks } from '../utils/data';
import PostsGallery from '../components/layout/PostsGallery';
import { getPinnedRepos, getRecentPostExcerpts } from '../utils/helpers';
import RepoGallery from '../components/layout/RepoGallery';
import useViewport from '../utils/hooks/useViewport';
import mq from '../utils/breakpoints';

export default function Home({ posts, repos }) {
  const { width } = useViewport();
  const isMobile = width <= mq.xs;
  const isTablet = width <= mq.sm;

  return (
    <div>
      <Head>
        <title> Dakotah Godfrey Dev | Home</title>
        <meta
          name='description'
          content="I'm a frontend developer, who builds awesome things with React and JavaScript.  Contact me to help you build your next project."
        />
        <meta name='keywords' content='react, web-design, dakotah, developer' />
        <meta name='author' content='Dakotah Godfrey' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta property='og:url' content='https://dakotahg.dev/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content=' Dakotah Godfrey Dev | Home' />
        <meta
          property='og:description'
          content="I'm a frontend developer, who builds awesome things with React and JavaScript.  Contact me to help you build your next project."
        />
        <meta
          property='og:image'
          content='https://dakotahg.dev/images/previewImage.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='dakotahg.dev' />
        <meta property='twitter:url' content='https://dakotahg.dev/' />
        <meta name='twitter:title' content=' Dakotah Godfrey Dev | Home' />
        <meta
          name='twitter:description'
          content="I'm a frontend developer, who builds awesome things with React and JavaScript.  Contact me to help you build your next project."
        />
        <meta
          name='twitter:image'
          content='https://dakotahg.dev/images/previewImage.png'
        />
      </Head>
      <Container isTablet={isTablet}>
        <Introduction hasImage>
          <h1>Hey there I&#39;m Dakotah!</h1>
          <p>
            I am a community taught front-end developer, from Toronto, Canada.
            🦝 🇨🇦 I&#39;m passionate about{' '}
            <a href='https://www.a11yproject.com/'>
              <abbr title='The Ally Project for web accessibility'>#a11y</abbr>
            </a>{' '}
            and building things that make the world a better place.
          </p>
          <p>
            Welcome to my site! Here you can find some of the things I&#39;ve
            built, as well as content related to my journey as a
            community-taught developer.
          </p>
          <p>
            If you want to discuss a project, or just want to chat,{' '}
            <Link href='/contact'>drop me a line here</Link>
          </p>
        </Introduction>
        <PostsGallery
          posts={posts}
          isMobile={isMobile}
          isTablet={isTablet}
          columns={2}
        />
        <RepoGallery repos={repos} />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const repos = await getPinnedRepos();
  const posts = await getRecentPostExcerpts(2);
  return {
    props: {
      repos,
      posts,
    },
  };
}
