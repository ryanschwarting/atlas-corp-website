"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, stagger } from "framer-motion";
import atlasLogo from "../../public/CorpLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const listVariants = {
    closed: { opacity: 0, transform: "translateX(-100%)" },
    open: {
      opacity: 1,
      transform: "translateX(0%)",
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  useEffect(() => {
    // Disable scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is reset if component unmounts while menu is open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const itemVariants = {
    closed: { opacity: 0, transform: "translateX(-100%)" },
    open: { opacity: 1, transform: "translateX(0%)" },
  };

  return (
    <nav className="bg-white w-full z-20 top-0 left-0 lg:hidden relative">
      <div className="flex items-center justify-between mx-auto p-2 gap-8">
        <Link href="/" className="flex items-center">
          <div className="w-[180px]">
            <Image
              src={atlasLogo}
              alt={"Atlas Corp Logo"}
              // layout="responsive"
            />
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="fixed z-50 inset-0 font-semibold flex flex-col items-center w-full overflow-hidden bg-white md:flex"
          variants={listVariants}
        >
          <div className="flex items-end w-full justify-end p-4 px-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              // className="w-8 h-8 text-black"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-8 h-8"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <motion.ul className="flex flex-col space-y-11 md:space-y-14 text-center justify-around text-[50px] md:text-[65px] text-shadow">
            <motion.li variants={itemVariants}>
              <Link onClick={() => setIsOpen(!isOpen)} href="/">
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link onClick={() => setIsOpen(!isOpen)} href="/#services">
                Services
              </Link>
            </motion.li>
            <Link onClick={() => setIsOpen(!isOpen)} href="/#projects">
              <motion.li variants={itemVariants}> Projects</motion.li>
            </Link>
            <motion.li variants={itemVariants}>
              <Link onClick={() => setIsOpen(!isOpen)} href="/#team">
                The Team
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link onClick={() => setIsOpen(!isOpen)} href={"/blogs"}>
                Blogs
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link onClick={() => setIsOpen(!isOpen)} href="/contact-us">
                <button className="bg-gray-tan gap-2 transform hover:scale-105 transition-transform duration-500 ease-in-out flex justify-between items-center text-black rounded-full py-1 px-3">
                  <p className="rounded-full">Contact</p>
                  <BsArrowRight />
                </button>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};
