import Head from 'next/head';
import Image from 'next/image';
import { Container, GridWrapper } from '../../components/layout/Lib';
import { getProjects } from '../../utils/helpers';
import { GoRepo, GoBrowser } from 'react-icons/go';
export default function Projects({ projects }) {
  return (
    <>
      <Head></Head>
      <Container>
        <h1>Recent Work</h1>
        <GridWrapper columns={1} gap={3}>
          {projects.map((project) => (
            <figure className='project' key={project.title}>
              <figcaption>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p className='stack'>Stack: {project.stack}</p>
                <ul className='project-links'>
                  <li>
                    <GoBrowser />{' '}
                    <a href={project.url}>{project.title} application</a>
                  </li>
                  <li>
                    <GoRepo />{' '}
                    <a href={project.repo}>{project.title} repository</a>
                  </li>
                </ul>
              </figcaption>
              <div className='image-wrapper'>
                <Image
                  src={project.cover.url}
                  alt={project.title}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
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
