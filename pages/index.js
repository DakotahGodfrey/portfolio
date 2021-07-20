import Head from 'next/head';
import Image from 'next/image';
import Introduction from '../components/layout/Introduction';
import Link from 'next/link';
import { Container, Footer } from '../components/layout/Lib';
import SocialLinks from '../components/SocialLinks';
import { socialLinks } from '../utils/data';
import PostsGallery from '../components/layout/PostsGallery';
import { getBlogPosts } from '../utils/helpers';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>dakotah_dev</title>
        <meta name='description' content='portfolio site' />
        <meta name='keywords' content='portfolio,site' />
        <meta name='author' content='Dakotah Godfrey' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Introduction hasImage>
        <h1>Hey there I&#39;m Dakotah!</h1>
        <p>
          I am a community taught front-end developer, from Toronto, Canada. 🦝
          🇨🇦 I&#39;m passionate about{' '}
          <a href='https://www.a11yproject.com/'>
            <abbr title='The Ally Project for web accessibility'>#a11y</abbr>
          </a>{' '}
          and building things that make the world a better place. Typically you
          can find me building with React or diving into new course material.
        </p>
        <p>
          Welcome to my site! Here you can find some of the things I&#39;ve
          built, as well as content related to my journey as a community-taught
          developer.
        </p>
        <p>
          If you want to discuss a project, or just want to chat,{' '}
          <Link href='/contact'>drop me a line here</Link>
        </p>
      </Introduction>
      <Container>
        <PostsGallery posts={posts} />
      </Container>
      <Footer>
        <SocialLinks links={socialLinks} />| &copy; dakotah_dev 2021
      </Footer>
    </div>
  );
}

export async function getStaticProps() {
  return await getBlogPosts();
}
