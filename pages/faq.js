import Layout from '../components/layout';

const FAQ = () => {
  return (
    <Layout>
      <div className='container page faq'>
        <h1>Frequently Asked Questions</h1>
        <div className='questions'>
          <div className='one-question'>
            <h2>Am I required to pay to use any feature of the extension?</h2>
            <p>No, our extension is completely free to use.</p>
          </div>
          <div className='one-question'>
            <h2>Do I need to provide any personal information?</h2>
            <p>
              No, we do not store or ask for any personal information from our
              users. The only requirement is for users to log in to their
              Spotify account.
            </p>
          </div>
          <div className='one-question'>
            <h2>Can I transfer any type of playlist?</h2>
            <p>
              Since we don’t require users to log in to their YouTube account,
              users can only transfer public and unlisted playlists. If you wish
              to transfer a private playlist, we suggest making it public or
              unlisted beforehand.
            </p>
          </div>
          <div className='one-question'>
            <h2>Does this extension support platforms other than Spotify?</h2>
            <p>
              Currently, our extension can open songs on different platforms
              like Apple Music and Amazon Music. We do not support song transfer
              functionality for other platforms yet.
            </p>
          </div>
          <div className='one-question'>
            <h2>How many songs can I transfer at once?</h2>
            <p>
              Currently, our extension allows up to 50 songs per playlist to be
              transferred at once. This number might increase in the near
              future.
            </p>
          </div>
        </div>
        <p>
          Can't find what you're looking for?{' '}
          <a target='_blank' href='mailto:youfyapp@gmail.com'>
            {' '}
            <b>Contact us.</b>
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default FAQ;
