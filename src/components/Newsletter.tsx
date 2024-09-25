"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  // HUBSPOT
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const PORTAL_ID = "21145626";
    const FORM_ID = "da41c1d7-fd00-4648-bf89-f9b32ce4b6f1";

    if (!email) {
      console.error("Form fields are missing");
      return;
    }

    const requestBody = {
      portalId: PORTAL_ID,
      formGuid: FORM_ID,
      fields: [
        {
          name: "email",
          value: email,
        },
      ],
    };

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        console.log("Form submission successful");
        setShowPopup(true);
        setEmail(""); // Reset the email field
        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 300000);
      } else {
        console.error("Form submission error");
        const responseData = await response.json();
        console.error(responseData);
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
  };
  return (
    <motion.div
      variants={itemVariants}
      ref={ref}
      transition={{ duration: 1.5 }}
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-tan flex flex-col justify-center h-[300px] gap-5 px-10 md:px-20"
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <motion.h1
          ref={titleRef}
          variants={fadeInUp}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 1.0 }}
          className="text-center text-black font-bold text-[24px] md:text-[30px] lg:text-[40px]"
        >
          Stay connected with Atlas{" "}
        </motion.h1>
        <motion.h1
          ref={titleRef}
          variants={fadeInUp}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 1.2 }}
          className="text-center font-light text-[14px] md:text-[16px] lg:text-[18px]"
        >
          Stay up to date with us! Feel free to sign up with your email.
        </motion.h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 justify-center items-center">
          {/* Email Text Box Container */}
          <div className="flex items-center bg-white w-[650px] h-[40px] md:h-[50px] border rounded-2xl shadow-sm">
            <FiMail size={24} className="ml-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow font-extralight bg-transparent border-none outline-none px-3"
            />
          </div>

          <button
            type="submit"
            value="Submit"
            className="text-[14px] md:text-[15px] h-[40px] md:h-[50px] text-center px-3 bg-blue-600 hover:bg-blue-500 text-white hover:text-black  rounded-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="fixed top-[10%] left-0 w-full h-full flex items-center justify-center z-50">
          <div className="w-[400px] h-[150px] bg-white flex items-center justify-center relative rounded-lg">
            <p className="text-black font-medium text-[20px]">
              Thank you for subscribing!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-black rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300 transform hover:scale-110 transition-transform duration-500 ease-in-out"
            >
              <AiOutlineCloseCircle size={18} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};
