import React from 'react';
import { Container } from '../../components/layout/Lib';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostSlugs, getPostBySlug } from '../../utils/helpers';
import Link from 'next/link';
import Image from 'next/image';

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
          layout='fill'
          objectFit='cover'
          quality={75}
        />
      </div>
      <figcaption>{title && `"${title}"`}</figcaption>
    </figure>
  );
};

const components = {
  a: CustomLink,
  img: CustomImage,
};

export default function Post({ postData, postContent }) {
  console.log(postData);
  const {
    title,
    image: { url },
  } = postData;
  return (
    <Container>
      <div className='post-meta'>
        <h1 className='post-title'>{title}</h1>
        <div className='image-wrapper'>
          <Image src={url} alt={title} objectFit='cover' layout='fill' />
        </div>
      </div>
      <section>
        <MDXRemote {...postContent} components={components} />
      </section>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.slug);
  const postContent = await serialize(postData.content);
  return { props: { postData, postContent } };
}

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
