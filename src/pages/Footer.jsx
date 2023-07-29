import SocialMediaIcons from '../components/SocialMediaIcon.jsx';

const Footer = () => {
  return (
    <footer className='h-64 bg-black pt-10'>
      <div className='w-10/12 mx-auto'>
        <SocialMediaIcons />
        <div className='md:flex justify-center md:justify-between text-center '>
          <p className='font-playfair font-semibold text-2xl text-yellow'>X devlopershajib</p>
          <p className='font-playfair text-md text-yellow'>&copy;2023 All Right reserved by developershajijb.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
