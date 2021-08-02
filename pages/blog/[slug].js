import React, { useEffect } from 'react';
import { Container } from '../../components/layout/Lib';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import { getAllPostSlugs, getPostBySlug } from '../../utils/helpers';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';

const CustomLink = ({ href, children }) => {
  return href.startsWith('/') || href.startsWith('#') || href === '' ? (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};

const CustomImage = ({ src, alt, width, height, title }) => {
  return (
    <figure className='post-figure'>
      <div className='image-wrapper'>
        <Image
          src={src}
          alt={alt}
          layout={'fill'}
          objectFit='cover'
          quality={75}
        />
      </div>
      <figcaption>{title && `"${title}"`}</figcaption>
    </figure>
  );
};

const CustomCode = ({ lang, type, value, children }) => (
  <pre className='prism-code'>{children}</pre>
);

const CustomHr = () => <div className='hr'></div>;

const components = {
  a: CustomLink,
  img: CustomImage,
  pre: CustomCode,
  hr: CustomHr,
};

export default function Post({ post, meta, postContent }) {
  const { title, image, description, slug } = meta;
  const { width } = useViewport();
  const isTablet = width <= mq.sm;
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='author' content='@dakotah_dev' />
        <meta name='keywords' content='react, learning, code, developer' />
        <meta property='og:url' content={`https://dakotahg.dev/${slug}`} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={`${title} | Dakotah Godfrey`} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='dakotahg.dev' />
        <meta property='twitter:url' content={`https://dakotahg.dev/${slug}`} />
        <meta name='twitter:title' content={`${title} | Dakotah Godfrey`} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Head>
      <Container isTablet={isTablet}>
        <div className='post-meta'>
          <h1 className='post-title'>{title}</h1>
          <div className='image-wrapper'>
            <Image src={image} alt={title} objectFit='cover' layout='fill' />
          </div>
        </div>
        <section className='post-content' style={{ padding: '2rem 1rem' }}>
          <MDXRemote {...postContent} components={components} />
        </section>
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const { data: meta, content } = matter(post);
  const postContent = await serialize(content);

  return { props: { post, meta, postContent } };
}

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
