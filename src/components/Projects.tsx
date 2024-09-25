"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import analytics from "../../public/atlas-analytics.png";
// import robloxSn from "../../public/roblox-SN.png";
import robloxWeb3 from "../../public/roblox-x-web3.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  thumbnail: any;
  url: string; // Add url to your project type
};

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Atlas Analytics",
    thumbnail: analytics,
    url: "https://analytics-app.atlascorp.io/home",
  },
  {
    id: 2,
    title: "Roblox x Web3",
    thumbnail: robloxWeb3,
    url: "https://roblox-x-web3.vercel.app/",
  },
];

type ProjectProps = {
  project: Project;
};

export const IndividualProject: React.FC<ProjectProps> = ({ project }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const itemVariants = {
    initial: { opacity: 1 },
    // hover: { opacity: 0 },
  };
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      key={project.id}
      variants={fadeUp}
      initial="initial"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      transition={{ duration: 0.4, delay: project.id * 0.2 }}
      className="rounded-lg flex flex-col justify-center items-center relative md:hover:bg-gray-tan hover:shadow-2xl"
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={500}
        height={300}
        className="rounded-md"
      />
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <motion.div
          variants={itemVariants}
          className="py-5 flex gap-2 lg:gap-0"
        >
          <h2 className="font-bold text-[20px]">{project.title}</h2>
          <button className="items-center lg:hidden">
            <BsArrowRight size={18} />
          </button>
        </motion.div>
      </Link>

      {/* Overlay button */}
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <motion.div
          variants={buttonVariants}
          className="absolute bottom-[2%] left-0 right-0 justify-center items-center lg:flex hidden"
        >
          <button className="flex items-center gap-1 text-[14px] md:text-[18px] font-semibold text-gray-tan p-3 bg-black rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <p>View Project</p>
            <BsArrowRight />
          </button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div id="projects" className="bg-white p-8 md:p-0">
      <motion.h1
        ref={titleRef}
        variants={fadeInUp}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="text-black flex justify-center font-bold text-[45px] p-4 md:p-0 md:pb-10"
      >
        Our Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 px-4 md:px-10 max-w-6xl mx-auto">
        {mockProjects.map((project) => (
          <IndividualProject key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};
