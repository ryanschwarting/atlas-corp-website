"use client";
import React from "react";
import Image from "next/image";
import aviPfp from "../../public/avipfp.jpg";
import robPfp from "../../public/robpfp.jpg";
import aaronPfp from "../../public/aaronpfp.jpg";
import ethanPfp from "../../public/ethanpfp.jpg";
import ryanPfp from "../../public/ryanpfp.jpg";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 1. Define the TeamMember Type
type TeamMember = {
  id: number;
  title: string;
  name: string;
  photo: any; // URL to the photo
  description: string;
  twitterLink: string;
  username: string;
};

// 2. Create a Sample Data Array
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Avraham Aisenberg",
    title: "Co-Founder",
    photo: aviPfp,
    description: "Chief Executive Officer",
    twitterLink: "https://x.com/AviAisenberg",
    username: "AviAisenberg",
  },
  {
    id: 2,
    title: "Co-Founder",
    name: "Rob Seidman",
    photo: robPfp,
    description: "Vice President",
    twitterLink: "https://x.com/RobSeidman",
    username: "RobSeidman",
  },
  {
    id: 3,
    title: "Co-Founder",
    name: "Aaron Alamary",
    photo: aaronPfp,
    description: "Chief Operations Officer",
    twitterLink: "https://x.com/aaron0505",
    username: "aaron0505",
  },
  {
    id: 4,
    name: "Ethan Daniel",
    title: "Developer",
    photo: ethanPfp,
    description: "Lead Full-Stack Engineer",
    twitterLink: "https://x.com/StaleDegree",
    username: "StaleDegree",
  },
  {
    id: 5,
    title: "Developer",
    name: "Ryan Schwarting",
    photo: ryanPfp,
    description: "Full-Stack Engineer",
    twitterLink: "https://x.com/_0xRyan",
    username: "_0xRyan",
  },
];
type TeamMemberCardProps = {
  member: TeamMember;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <motion.div
      ref={ref}
      key={member.id}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, delay: member.id * 0.2 }}
      className="grid grid-rows-teamMember md:w-60 p-5 bg-gray-tan shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
    >
      <div className="flex justify-center">
        <Image
          src={member.photo}
          alt={member.name}
          width={200}
          height={200}
          className="rounded-xl border-2 border-black"
        />
      </div>
      <div className="bg-black w-[200px] mx-auto text-white rounded-full font-bold text-center mt-1">
        {member.title}
      </div>
      <div className="text-center font-semibold text-[20px] mt-2">
        {member.name}
      </div>
      <div className="text-center h-10 mt-2">{member.description}</div>
      <div className="flex justify-center">
        <a href={member.twitterLink} target="_blank" rel="noopener noreferrer">
          <button className="text-[18px] font-light space-x-2 hover:underline transform hover:scale-105 transition-transform duration-500 ease-in-out text-center flex justify-center items-center text-black rounded-full">
            <RiTwitterXFill />
            <span> @{member.username}</span>
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export const TeamPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div className="p-4 md:p-10">
      <div
        id="team"
        className="bg-white text-black font-mono mt-5 max-w-7xl mx-auto "
      >
        <motion.h1
          ref={titleRef}
          variants={fadeInUp}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-black flex justify-center font-bold text-[45px] p-0 md:pb-10"
        >
          Meet the Team
        </motion.h1>
        <div className="flex flex-col flex-wrap md:flex-row  md:items-start justify-around gap-4 p-10 md:p-0">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};
