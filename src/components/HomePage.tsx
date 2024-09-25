"use client";
import { motion } from "framer-motion";

export const HomePage = () => {
  const parallaxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.0 } },
  };

  return (
    <div
      id="home"
      className="relative p-4 h-[550px] md:h-[800px] lg:h-[640px] w-full bg-white overflow-hidden text-gray-tan flex justify-center items-center mt-3"
    >
      <video
        muted
        loop
        autoPlay={true}
        playsInline
        className="w-[370px] h-[500px] md:h-full md:w-[700px] lg:w-[1350px] object-cover absolute rounded-[32px]"
      >
        <source
          src="https://framerusercontent.com/assets/pLbagRh3aY5RAwOkcZbNoj9jI.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute p-4 w-[370px] md:w-[700px] lg:w-[1350px] h-[500px] md:h-full rounded-[32px] bg-black opacity-60 z-5"></div>
      <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
        <motion.p
          className="text-center font-extrabold text-[38px] md:text-[70px] lg:text-[110px] leading-5"
          variants={parallaxVariants}
          initial="hidden"
          animate="visible"
        >
          Custom Software
        </motion.p>
        <motion.p
          className="text-center font-extrabold text-[38px] md:text-[70px] lg:text-[110px]"
          variants={parallaxVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }} // Added delay for sequential appearance
        >
          Solutions Provider
        </motion.p>
        <motion.div
          className="px-10 md:px-0 font-normal text-[20px] md:text-[20px] lg:text-[30px] text-center space-y-2"
          variants={parallaxVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }} // Added delay for sequential appearance
        >
          <p>Ready to take your idea to the next level?</p>
          <p>Let&apos;s build together.</p>
        </motion.div>
      </div>
    </div>
  );
};
