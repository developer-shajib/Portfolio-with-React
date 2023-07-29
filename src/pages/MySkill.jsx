import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import skillImg from '../assets/skills-image.jpg';

const MySkills = () => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');

  const skillBlog = [
    {
      delay: 0,
      number: '01',
      color: 'bg-blue',
      name: 'Experience',
      title: `A auctor pharetra hendrerit mattis amet etiam interdum platea. Est morbi porttitor scelerisque fermentum, sagittis non egestas. Amet odio sit sagittis,`
    },
    {
      delay: 0.2,
      number: '02',
      color: 'bg-red',
      name: 'Innovative',
      title: `Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies amet in in neque nibh tortor. Libero sed pretium justo nulla blandit nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin faucibus a`
    },
    {
      delay: 0.4,
      number: '03',
      color: 'bg-yellow',
      name: 'Imaginative',
      title: `Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in curabitur. Lectus libero, egestas enim aliquam quis felis amet. Sagittis, amet netus fringilla netus lobortis odio sed platea. Bibendum.`
    }
  ];

  return (
    <section
      id='skills'
      className='pt-10 pb-44'>
      {/* <!-- HEADER AND IMAGE SECTION --> */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}>
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-red'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7'>Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut fames odio in at.</p>
        </motion.div>

        <div className='mt-16 md:mt-0'>
          {isAboveLarge ? (
            <div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'>
              <img
                alt='skills'
                className='z-10'
                src={skillImg}
              />
            </div>
          ) : (
            <img
              alt='skills'
              className='z-10'
              src={skillImg}
            />
          )}
        </div>
      </div>

      {/* <!-- SKILLS --> */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* <!-- SKILLS BLOG --> */}
        {skillBlog?.map((item, index) => (
          <motion.div
            key={index}
            className='md:w-1/3 mt-10'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: item.delay, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <div className='relative h-32'>
              <div className='z-10'>
                <p className='font-playfair font-semibold text-5xl'>{item.number}</p>
                <p className='font-playfair font-semibold text-3xl mt-3'>{item.name}</p>
              </div>
              <div className={`${item.color} rounded-tl-full rounded-br-full w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]`} />
            </div>
            <p className='mt-5'>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
