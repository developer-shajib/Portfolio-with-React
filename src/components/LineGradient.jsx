import { motion } from 'framer-motion';

const LineGradient = ({ width = 'w-full' }) => {
  return (
    <motion.div
      className={`h-0.5 ${width} bg-gradient-rainblue `}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 }
      }}></motion.div>
  );
};

export default LineGradient;
