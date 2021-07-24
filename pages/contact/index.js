import Head from 'next/head';
import { Container, GridWrapper } from '../../components/layout/Lib';
export default function Contact() {
  return (
    <>
      <Head></Head>
      <Container>
        <h1>Contact</h1>
        <p className='contact-lead'>
          If you’d like to send me a message, I can be reached through the
          contact form below or via social media at any of the handles below.
        </p>
        <GridWrapper columns={2} gap={3} className='contact-grid'>
          <section className='contact-form'>
            <form>
              <h2>Send me a message</h2>
              <div className='control-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' />
              </div>
              <div className='control-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' />
              </div>
              <div className='control-group'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' />
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
