"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import atlasLogo from "../../public/CorpLogo.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export const Navigation = () => {
  const navVariants = {
    hidden: { y: -150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // this will stagger the children's animations
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="px-8 pb-8 pt-4 bg-white hidden lg:flex"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 1 }}
    >
      {" "}
      <div className=" hidden lg:flex w-full overflow-hidden px-2 py-1 md:px-4 md:py-2 lg:px-8 lg:py-4 xl:px-10 xl:py-5 mx-auto font-mono font-normal lg:justify-between items-center bg-gray-tan text-black lg:border-2 border-black rounded-full shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 sm:w-20 md:w-32 lg:w-40">
            <Link href="/">
              <Image
                src={atlasLogo}
                alt={"Atlas Corp Logo"}
                // layout="responsive"
              />
            </Link>
          </div>
        </div>
        <nav className="flex-grow text-[10px] md:text-[18px]">
          <motion.ul
            className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8"
            variants={navVariants}
          >
            {" "}
            <motion.li variants={navItemVariants}>
              <button className="hover:underline transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <Link href="/">Home</Link>
              </button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <button className="hover:underline transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <Link href="/#services">Services</Link>
              </button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <button className="hover:underline transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <Link href="/#projects">Projects</Link>
              </button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <button className="hover:underline transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <Link href="/#team">The Team</Link>
              </button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <button className="hover:underline transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <Link href={"/blogs"}>Blogs</Link>
              </button>
            </motion.li>
          </motion.ul>
        </nav>
        <motion.div
          className="text-[8px] md:text-[16px] lg:text-[16px]"
          variants={navVariants}
        >
          <Link href="/contact-us">
            <button className="md:gap-2 transform hover:bg-white hover:text-black hover:scale-105 transition-transform duration-500 ease-in-out flex justify-between items-center bg-black text-white rounded-full p-1.5 md:p-3">
              <p>Get in Contact</p>
              <BsArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
