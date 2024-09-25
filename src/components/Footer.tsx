"use client";
import atlasLogo from "../../public/CorpLogoWhite.svg";
import { BsArrowUp } from "react-icons/bs";
import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export const Footer = () => {
  const handleContactClick = () => {
    const email = "contact@atlascorp.io";
    const subject = "Inquiry From Website";
    const body = "Hello Atlas,";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [iconSize, setIconSize] = useState(16);

  useEffect(() => {
    // Function to set size
    const updateSize = () => {
      if (window.innerWidth >= 768) {
        // MD breakpoint in Tailwind is 768px
        setIconSize(22);
      } else {
        setIconSize(16);
      }
    };

    // Initial set size
    updateSize();

    // Event listener for window resize
    window.addEventListener("resize", updateSize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div
      className="bg-black flex justify-between
       p-5 lg:py-1 lg:px-20"
    >
      <div className="flex flex-col space-y-2 justify-center items-center text-white">
        <p className="text-white font-normal mt-1 text-[14px] md:text-[24px]">
          Go To Top
        </p>
        <button
          onClick={scrollToTop}
          className="flex justify-center items-center h-[24px] w-[15px] md:h-[30px] md:w-[20px] border border-white rounded-full transform hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          <BsArrowUp size={iconSize} />
        </button>
      </div>
      <Link href="/">
        <Image
          className="w-[120px] md:w-[250px] py-2 md:mr-10"
          src={atlasLogo}
          alt={"Atlas Corp Logo"}
        />
      </Link>
      <div className="flex space-x-11">
        <div className="flex flex-col space-y-4 justify-center">
          <p className="text-[15px] md:text-[25px] font-normal text-center text-white">
            Socials
          </p>
          <div className="flex justify-center gap-3 text-white">
            {/* Twitter Link */}
            <a
              href="https://x.com/AtlasCorp_dcl"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <RiTwitterXFill size={iconSize} />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/atlas-c-o-r-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FaLinkedinIn size={iconSize} />
            </a>
            <button
              onClick={handleContactClick}
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FiMail size={iconSize} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
