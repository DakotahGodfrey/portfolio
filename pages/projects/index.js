import Head from 'next/head';
import Image from 'next/image';
import { Container, GridWrapper } from '../../components/layout/Lib';
import { getProjects } from '../../utils/helpers';
import { GoRepo, GoBrowser } from 'react-icons/go';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';
export default function Projects({ projects }) {
  const { width } = useViewport();
  const isTablet = width <= mq.sm;
  return (
    <>
      <Head></Head>
      <Container isTablet={isTablet}>
        <h1>Recent Work</h1>
        <GridWrapper
          columns={1}
          gap={3}
          style={{ marginInline: `${isTablet && '2.2rem'}` }}
        >
          {projects.map((project) => (
            <figure
              className='project'
              key={project.title}
              style={{ gridTemplateColumns: `${isTablet && '1fr'}` }}
            >
              <figcaption>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p className='stack'>Stack: {project.stack}</p>
                {!isTablet && (
                  <ul
                    className='project-links'
                    style={{ gridTemplateColumns: `${isTablet && '1fr'}` }}
                  >
                    <li>
                      <GoBrowser />{' '}
                      <a href={project.url}>{project.title} application</a>
                    </li>
                    <li>
                      <GoRepo />{' '}
                      <a href={project.repo}>{project.title} repository</a>
                    </li>
                  </ul>
                )}
              </figcaption>
              <div className='image-wrapper'>
                <Image
                  src={project.cover.url}
                  alt={project.title}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              {isTablet && (
                <ul
                  className='project-links'
                  style={{
                    gridTemplateColumns: `${isTablet && '1fr'}`,
                    gridGap: '1.5rem',
                  }}
                >
                  <li>
                    <GoBrowser /> <a href={project.url}>{project.title} demo</a>
                  </li>
                  <li>
                    <GoRepo /> <a href={project.repo}>{project.title} repo</a>
                  </li>
                </ul>
              )}
            </figure>
          ))}
        </GridWrapper>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}
