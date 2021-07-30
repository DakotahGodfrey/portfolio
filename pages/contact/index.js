/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { Container, GridWrapper } from '../../components/layout/Lib';
import useViewport from '../../utils/hooks/useViewport';
import mq from '../../utils/breakpoints';
import { useState } from 'react';
import { MdSend, MdCheckCircle } from 'react-icons/md';
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const { width } = useViewport();
  const isMobile = width < mq.xs;
  const isTablet = width < mq.sm;
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  function handleSubmit(e) {
    console.log(e.target);
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': e.target.getAttribute('name'),
        Name: name,
        Email: email,
        Message: message,
      }),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => setError(error));
  }
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
            {!submitted ? (
              <form
                name='contact'
                method='POST'
                onSubmit={(e) => handleSubmit(e)}
                data-netlify='true'
              >
                <input type='hidden' name='contact-form' value='contact' />
                <h2>Send me a message</h2>
                <div className='control-group'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={name}
                    onChange={(e) => handleNameChange(e)}
                  />
                </div>
                <div className='control-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => handleEmailChange(e)}
                  />
                </div>
                <div className='control-group'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    name='message'
                    id='message'
                    required
                    value={message}
                    onChange={(e) => handleMessageChange(e)}
                  />
                </div>
                <button className='contact-submit' type='submit'>
                  Send <MdSend />
                </button>
              </form>
            ) : (
              <div className='submitted-message'>
                <h2 role='alert'>
                  Message sent!
                  <MdCheckCircle />
                </h2>
                <p> Thanks for being awesome, I'll be in touch soon.</p>
              </div>
            )}
            {error && (
              <div className='submitted-message'>
                <h2 role='alert'>
                  Message failed to send!
                  <MdCheckCircle />
                </h2>
                <p> Please try again.</p>
              </div>
            )}
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
