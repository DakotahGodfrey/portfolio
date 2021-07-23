/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

const Bio = () => {
  return (
    <section
      className='post-content'
      style={{ maxWidth: '80rem', margin: '0 auto' }}
    >
      <p>
        I'm a community-taught web developer from Toronto, Canada{' '}
        <span aria-hidden='true'>🦝 🇨🇦</span> . I've focused on building a solid
        foundation to be a front-end developer. I'm well versed in HTML,
        CSS/SCSS, JavaScript, and React.js. Recently I've also been working with
        PostgreSQL, GraphQL, and Next.js, to build faster and better web
        applications. You can view some of my latest work in the repos below.
      </p>
      <p>
        Before the Covid-19 epidemic, I was working in the hospitality industry
        in Toronto. As work became scarce, I started to think about a career
        change. So I started to teach myself to code. Through resources like{' '}
        <a rel='noreferrer' target='_blank' href='https://codecademy.com/'>
          Codecademy
        </a>{' '}
        and a number of online tutorials from awesome creators like{' '}
        <a rel='noreferrer' target='_blank' href='https://www.lengstorf.com/'>
          Jason Lengstorf
        </a>{' '}
        ,{' '}
        <a rel='noreferrer' target='_blank' href='https://kentcdodds.com/'>
          Kent C. Dodds
        </a>
        ,{' '}
        <a
          rel='noreferrer'
          target='_blank'
          href='https://twitter.com/ASpittel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
        >
          {' '}
          Ali Spittel
        </a>
        ,{' '}
        <a rel='noreferrer' target='_blank' href='https://compiled.blog/'>
          Emma Bostian,
        </a>{' '}
        <a rel='noreferrer' target='_blank' href='https://jhey.dev/'>
          Jhey Dev
        </a>{' '}
        and many others, I found my love for programming.
      </p>
      <p>
        My goal is to help make the tech community even more accessible. I'd
        love to help people learn to code and break into the tech industry. I
        want to reach a spot where I can give back a little of what I've gained
        from the dev community and help people grow in this space.
      </p>
      <p>
        At the moment I'm looking for a position as an intern or a junior
        developer, to continue to grow my skill set with additional experience.
        If you'd like to get in touch about an opportunity, please feel free to
        reach out. I'd love to talk! <Link href='/contact'> Contact me</Link>.
      </p>
    </section>
  );
};

export default Bio;
