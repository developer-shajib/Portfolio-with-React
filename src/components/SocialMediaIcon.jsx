import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';

const SocialMediaIcons = () => {
  const social = [
    {
      link: 'https://www.linkedin.com',
      alt: 'linkedin-link',
      src: linkedin
    },
    {
      link: 'https://www.twitter.com',
      alt: 'twitter-link',
      src: twitter
    },
    {
      link: 'https://www.facebook.com',
      alt: 'facebook-link',
      src: facebook
    },
    {
      link: 'https://www.instagram.com',
      alt: 'instagram-link',
      src: instagram
    }
  ];

  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      {social?.map((item, index) => (
        <a
          key={index}
          className='hover:opacity-50 transition duration-500'
          href={item.href}
          target='_blank'
          rel='noreferrer'>
          <img
            alt={item.alt}
            src={item.src}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
