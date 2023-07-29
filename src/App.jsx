import { useEffect, useState } from 'react';
import './App.css';
import useMediaQuery from './hooks/useMediaQuery.jsx';
import Navbar from './pages/Navbar.jsx';
import { motion } from 'framer-motion';
import Landing from './pages/Landing.jsx';
import LineGradient from './components/LineGradient.jsx';
import MySkills from './pages/MySkill.jsx';
import Projects from './pages/Projects.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './pages/Footer.jsx';
import DotGroup from './pages/dotGroup.jsx';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className='app bg-deep-blue'>
        {/* <!-- Navbar --> */}
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* <!-- DotGroup --> */}
        <div className='w-5/6 mx-auto md:h-full'>
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <motion.div
            margin='0 0 -200px 0'
            amount='all'
            onViewportEnter={() => setSelectedPage('home')}>
            <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>
        <LineGradient />

        {/* <!-- Skills --> */}

        <div className='w-5/6 mx-auto md:h-full mt-32'>
          <motion.div
            margin='0 0 -200px 0'
            amount='all'
            onViewportEnter={() => setSelectedPage('skills')}>
            <MySkills />
          </motion.div>
        </div>
        <LineGradient />
        <div className='w-5/6 mx-auto mt-36'>
          <motion.div
            margin='0 0 -200px 0'
            amount='all'
            onViewportEnter={() => setSelectedPage('projects')}>
            <Projects />
          </motion.div>
        </div>
        <LineGradient />

        {/* <!-- TESTIMONIAL --> */}

        <div className='w-5/6 mx-auto md:h-full'>
          <motion.div
            margin='0 0 -200px 0'
            amount='all'
            onViewportEnter={() => setSelectedPage('testimonials')}>
            <Testimonials />
          </motion.div>
        </div>
        <LineGradient />

        {/* <!-- Contact --> */}
        <div className='w-5/6 mx-auto md:h-full md:my-44'>
          <motion.div
            margin='0 0 -200px 0'
            amount='all'
            onViewportEnter={() => setSelectedPage('contact')}>
            <Contact />
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
