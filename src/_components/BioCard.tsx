import Image from 'next/image';
import Link from 'next/link';
import profilePic from 'public/images/calvincchan-profile.png';

const BioCard: React.FC = () => {
  const author = process.env.SITE_AUTHOR || '';
  const bio = process.env.SITE_BIO || '';
  return (
    <aside role="bio" className="x-bio x:my-24">
      <div className="x:flex x:flex-col x:sm:flex-row x:sm:items-center x:gap-4">
        <div>
          <Image
            src={profilePic}
            alt={author}
            width={100}
            height={100}
            className="x:rounded-full"
          />
        </div>
        <div>
          <h3>{author}</h3>
          <h4>{bio}</h4>
          <p>
            <Link href="/contact" className="x-button">
              Let's Talk ✨
            </Link>
          </p>
        </div>
      </div>
    </aside>
  );
};

export { BioCard };
