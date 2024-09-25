"use client";
import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ContactUs: React.FC = () => {
  // Animation variants
  const standUpAnimation = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="flex justify-center h-screen md:h-full items-center bg-white px-6 md:p-12">
      <motion.div
        ref={ref}
        variants={standUpAnimation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 2.5 }}
        className="flex flex-col justify-center items-center font-mono w-[370px] h-[400px] md:w-[600px] md:h-[650px] lg:w-[1200px] lg:h-[600px] shadow-2xl rounded-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://framerusercontent.com/assets/pLbagRh3aY5RAwOkcZbNoj9jI.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Black overlay */}
        <div className="flex flex-col justify-center items-center z-20 w-full h-full">
          <div className="uppercase text-gray-tan text-[22px] md:text-[40px] lg:text-[60px] font-extrabold p-3 rounded-xl">
            Have a project in mind?
          </div>
          <div className="text-[11px] md:text-[14px] mt-8 p-2 rounded-xl">
            <Link href="/contact-us">
              <button className="space-x-2 transform hover:scale-105 transition-transform duration-500 ease-in-out flex justify-between items-center bg-gray-tan text-black hover:text-gray-tan hover:bg-black rounded-full p-3">
                <p>Get in Contact</p>
                <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
