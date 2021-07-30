import Head from 'next/head';
import { Container, GridWrapper } from '../../components/layout/Lib';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';
export default function Contact() {
  const { width } = useViewport();
  const isMobile = width < mq.xs;
  const isTablet = width < mq.sm;
  return (
    <>
      <Head></Head>
      <Container isTablet={isTablet}>
        <GridWrapper
          columns={isTablet ? 1 : 2}
          gap={3}
          className='contact-grid'
        >
          <div
            className='contact-lead'
            style={{ gridColumn: `${isTablet ? 1 : '1 /span 2'}` }}
          >
            <h1>Contact</h1>
            <p>
              If you’d like to send me a message, I can be reached through the
              contact form below or via social media at any of the handles
              below.
            </p>
          </div>

          <section className='contact-form'>
            <form
              name='contact'
              method='POST'
              action='/success'
              data-netlify='true'
            >
              <input type='hidden' name='contact-form' value='contact' />
              <h2>Send me a message</h2>
              <div className='control-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' />
              </div>
              <div className='control-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' />
              </div>
              <div className='control-group'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' />
              </div>
            </form>
          </section>

          <section className='contact-links'>
            <h2>Socials</h2>
            <ul>
              <li>
                Twitter:{' '}
                <a href='https://twitter.com/dakotah_dev'>@dakotah_dev</a>
              </li>
              <li>
                LinkedIn:{' '}
                <a href='https://www.linkedin.com/in/dakotah-godfrey'>
                  Dakotah Godfrey
                </a>
              </li>
              <li>
                Github:{' '}
                <a href='https://www.github.com/dakotahgodfrey'>
                  @DakotahGodfrey
                </a>
              </li>
            </ul>
          </section>
        </GridWrapper>
      </Container>
    </>
  );
}
