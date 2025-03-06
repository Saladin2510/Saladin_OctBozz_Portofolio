import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const TechnologiesCard = ({index, icon, }) => (
  <Tilt className='xs:w-[152px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.75)}
      className='w-full red-yellow-gradient p-[1px] rounded-[60px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='
        bg-tertiary rounded-[60px] py-1 px-1 w-[150px] h-[120px] flex justify-center items-center '
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16'
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className=' flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <TechnologiesCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};



const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt={technology.name} className="w-24 h-24 object-contain" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(About, "");