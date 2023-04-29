import Link from 'next/link';
export const AnnouncementBanner = () => {
  return (
    <div className='banner'>
      Deep dive in the world of AI with{' '}
      <div className='link'>
        <Link href={'https://aitools.fyi/'} target='_blank'>
          aitools.fyi
        </Link>
      </div>
    </div>
  );
};
