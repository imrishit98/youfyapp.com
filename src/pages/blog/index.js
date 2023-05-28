import Link from 'next/link';
import Layout from '../../components/Layout';

const Blog = () => {
  return (
    <Layout>
      <div className='blog-page'>
        <h1>Blog</h1>
        <ul className='blog-list'>
          <li>
            <h2>
              <Link href='/blog/how-to-transfer-your-favorite-youtube-songs-to-spotify-with-youfy'>
                How to Transfer Your Favorite YouTube Songs to Spotify with
                Youfy
              </Link>
            </h2>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;
