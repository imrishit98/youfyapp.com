import Head from 'next/head';
import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Youfy - Youtube to Spotify</title>
        <meta
          name='description'
          content='Transfer your favorite YouTube songs and playlists to Spotify with just one click!'
        />
      </Head>
      <div className='home-page'>
        <section className='hero'>
          <div className='text'>
            <h1>Take your music with you</h1>
            <p className='subheading'>
              Easily transfer your favorite YouTube songs and playlists to
              Spotify for free.
            </p>
            <div className='cta'>
              <a href='https://cutt.ly/youfy' target='_blank'>
                <input type='button' value='Get it now' className='btn' />
              </a>
            </div>
          </div>

          <div className='image'>
            <img src='images/hero123.png' alt='' className='left' />
          </div>
        </section>

        <section id='features'>
          <div className='image'>
            <img src='images/circle1.svg' alt='' className='left' />
          </div>
          <div className='text'>
            <h2>Add YouTube songs to Spotify playlists in one click</h2>
            <p className='subheading'>
              Make things faster. Add your favorite songs from YouTube to your
              Spotify playlists in just one click.
            </p>
          </div>
        </section>

        <section className='second-feature'>
          <div className='text'>
            <h2>Transfer your YouTube playlists to Spotify easily</h2>
            <p className='subheading'>
              Transfer unlimited YouTube playlists to Spotify from YouTube. No
              need to switch tabs.
            </p>
          </div>
          <div className='image'>
            <img src='images/circle2.svg' alt='' className='left' />
          </div>
        </section>

        <section>
          <div className='image'>
            <img src='images/circle3.svg' alt='' className='left' />
          </div>
          <div className='text'>
            <h2>Transfer songs and playlists without switching tabs</h2>
            <p className='subheading'>
              Time matters. Save time by doing all the songs and playlists
              transfer without leaving YouTube.
            </p>
          </div>
        </section>

        <section className='get-now'>
          <h1>Get control over your music. Download Youfy now!</h1>
          <div className='cta'>
            <a href='https://cutt.ly/youfy' target='_blank'>
              <input type='button' value='Get it now' className='btn' />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

/* export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
} */
