import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[198px] w-full'>
    <a href={link} target="_blank">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-grey-gradient p-[3px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[110px] flex justify-center items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </a>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className= {`${styles.sectionSubText} text-[#fff]`}
        >Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[#915EFF]`}>Saladin Octiano Bonanza.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Saya pemula dalam bidang software developer dengan minat di pengembangan website, video editing, 3d
            visual, dan memakai framework dan bahasa seperti React.js, Tailwindcss, and Three.js. Saya masih belajar dan selalu
            terus belajar setiap saat!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
