import { motion } from "framer-motion";

import { styles } from "../styles";
import cv from "../assets/CV-adin.pdf"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2c52b3]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className=''>Saladin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            saya pemula di bidang tech dan akan selalu belajar <br className='sm:block hidden' />
          </p>
        </div>
      </div>

      {/* Tombol Download CV */}
      <div className="absolute bottom-40 w-full flex justify-center">
        <a
          href={cv}
          download="Saladin_CV.pdf"
          className="px-9 py-5 bg-[#1e92ff] text-lg font-bold rounded-xl shadow-lg hover:bg-[#1538d4] transition duration-300 text-[#ffffff]"
        >
          Download CV
        </a>
      </div>

      <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
