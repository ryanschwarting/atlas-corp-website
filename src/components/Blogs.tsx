"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";

export const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/getBlogs");
      const blogs = await res.json();

      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <div
      id="services"
      className="bg-white h-screen md:h-full p-4 md:p-10 flex flex-col justify-center items-center"
    >
      <motion.h1
        ref={titleRef}
        className="text-black text-[50px] p-4 font-bold"
        variants={fadeInUp}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        transition={{ duration: 1.0 }}
      >
        Blogs
      </motion.h1>

      <ServiceItems blogs={blogs} />
    </div>
  );
};

export const ServiceItems = ({ blogs }: { blogs: BlogData[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      ref={ref}
      transition={{ duration: 1.5 }}
      animate={inView ? "visible" : "hidden"}
      className="bg-white text-black gap-5 md:gap-8 md:h-full justify-around rounded-xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
    >
      {blogs.map((blog, index) => (
        <ServiceItem
          key={index}
          img={
            blog.attributes.thumbnail.data?.attributes.url
              ? `https://atlas-cms.atlascorp.io${blog.attributes.thumbnail.data?.attributes.url}`
              : "/atlas-logo.png"
          }
          title={blog.attributes.Title}
          description={blog.attributes.Description}
          categories={blog.attributes.categories.data}
          timestamp={blog.attributes.createdAt}
        />
      ))}
    </motion.div>
  );
};

type ServiceItemProps = {
  img: any;
  title: string;
  description: string;
  categories: CategoryData[];
  timestamp: string;
};

/// ServiceItem Component
export const ServiceItem: React.FC<ServiceItemProps> = ({
  img,
  title,
  description,
  categories,
  timestamp,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });
  const itemVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  const daysAgo = (dateString: string) => {
    const blogDate = new Date(dateString);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - blogDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  return (
    <Link href={`/blogs/${title}`}>
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "initial" : "initial"}
        whileHover="hover"
        className="flex flex-col w-full gap-5 rounded-2xl p-5 bg-gray-tan hover:shadow-2xl transition items-center relative"
      >
        <div className="flex gap-1 w-full px-2">
          <div className="flex-grow flex flex-wrap gap-1">
            {categories.map((category) => (
              <p
                key={category.id}
                className="flex gap-1 bg-blue-200 text-black font-normal text-[12px] py-1 px-3 rounded-lg items-center"
              >
                <MdOutlineArticle />
                {category.attributes.Name}
              </p>
            ))}
          </div>
          <p className="flex justify-end items-center text-right text-black font-light text-[12px]">
            {daysAgo(timestamp)}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div>
            <Image
              src={img}
              alt={title}
              width={500}
              height={300}
              className="flex rounded-xl border-2 border-black w-[250px] h-[150px] md:w-[500px] md:h-[280px] object-cover"
            />
          </div>
          <motion.h1
            variants={itemVariants}
            className="text-center font-bold text-[28px]"
          >
            {title}
          </motion.h1>
          <div className="gap-1 flex flex-col justify-center items-center lg:gap-0">
            <motion.p
              variants={itemVariants}
              className="font-light text-[12px] md:text-[14px] lg:px-10"
            >
              {description}
            </motion.p>
            <button className="items-center lg:hidden">
              <BsArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Overlay button */}
        <motion.div
          variants={buttonVariants}
          className="absolute bottom-0 left-0 right-0 hidden lg:flex justify-center items-center pb-5"
        >
          <button className="flex items-center gap-1 text-[14px] md:text-[18px] font-semibold text-gray-tan p-3 bg-black rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <p> Read Post</p>
            <BsArrowRight />
          </button>
        </motion.div>
      </motion.div>
    </Link>
  );
};
