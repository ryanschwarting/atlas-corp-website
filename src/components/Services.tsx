"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import blockchainIcon from "../../public/blockchain.png";
import websiteIcon from "../../public/websiteIcon.png";
import gamingIcon from "../../public/gamingIcon.png";
import mobileIcon from "../../public/mobileIcon.png";
import analyticsIcon from "../../public/analyticsIcon.png";
import specialtiesIcon from "../../public/Specialties.png";

export const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const titles = [
    "Blockchain",
    "Websites & CMS",
    "Gaming",
    "Mobile Apps",
    "Data Analytics & Visualization",
    "Specialties",
  ];
  const images = [
    blockchainIcon,
    websiteIcon,
    gamingIcon,
    mobileIcon,
    analyticsIcon,
    specialtiesIcon,
  ];
  const descriptions = [
    "We specialize in blockchain solutions tailored to your needs. From in-depth metaverse analytics to robust Solidity smart contracts and efficient full-stack dApps, we've got you covered. Additionally, our team ensures your presence in the metaverse with straightforward and functional scene building. Your digital transition, simplified with us.",
    "We bring modern web solutions to the forefront. Utilizing React coupled with cutting-edge frameworks like Next.js, we craft responsive and high-performance websites. Complementing our technical expertise, we offer integrated CMS solutions, ensuring you have full control over content, seamlessly. Elevate your online presence with us.",
    "We master the nexus of gaming and virtual realms. Harnessing the power of Unity for game design, diving into the expansive world of Decentraland, and crafting unique experiences on Roblox, our team brings your gaming vision to life. Step into immersive worlds, created with precision and passion by our seasoned developers. Your game, our craft.",
    "We redefine mobile experiences. With Swift for iOS precision, Kotlin for Android excellence, and the flexibility of React Native for cross-platform solutions, we build apps that resonate. Trust in our expertise to create mobile applications that are efficient, user-centric, and future-ready. Elevating your ideas, one app at a time.",
    "Specialize in cutting-edge metaverse and data analytics solutions, harnessing advanced tools to decode complex digital ecosystems. We delve deep into the virtual realms to retrieve actionable insights, tailoring our strategies to ensure your business remains at the forefront of this evolving domain.",
    "Augmented Reality, 3D Experiences, Virtual Reality, iOS, Blockchain, Solidity, Javascript, Typescript, Python, MongoDB, Unity, C#, React, Next.js, Auth0, Stripe, SwiftUI, Kotlin, React Native, PostgreSQL, and Roblox",
  ];

  return (
    <div className="p-4 md:p-10">
      <div
        id="services"
        className="bg-white h-full flex max-w-7xl mx-auto flex-col justify-center items-center"
      >
        <motion.h1
          ref={titleRef}
          className="text-black text-[50px] mb-5 font-bold"
          variants={fadeInUp}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 1.0 }}
        >
          Services
        </motion.h1>

        <motion.div className="bg-white text-black h-full justify-around rounded-xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <ServiceItem
              key={index}
              img={img}
              title={titles[index]}
              description={descriptions[index]}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

type ServiceItemProps = {
  img: any;
  title: string;
  description: string;
};

// ServiceItem Component
const ServiceItem: React.FC<ServiceItemProps> = ({
  img,
  title,
  description,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{ duration: 0.7 }}
      className="flex gap-5 w-full rounded-2xl p-5 bg-gray-tan shadow-2xl"
    >
      <div className="flex flex-col gap-8">
        <div className="flex">
          <Image
            src={img}
            alt={title}
            className="rounded-xl w-[45px] h-[45px] md:w-[50px] md:h-full"
          />
          <h1 className="font-bold text-[30px] pl-2">{title}</h1>
        </div>

        <p className="font-light text-[16px]">{description}</p>
      </div>
    </motion.div>
  );
};
