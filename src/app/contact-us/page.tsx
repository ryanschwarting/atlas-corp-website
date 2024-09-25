"use client";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Newsletter } from "@/components/Newsletter";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactClick = () => {
    const email = "contact@atlascorp.io";
    const subject = "Inquiry From Website";
    const body = "Greetings Atlas CORP,";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handlePhoneClick = () => {
    const phoneNumber = "9544594064";
    const telLink = `tel:${phoneNumber}`;

    window.location.href = telLink;
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const slideInFromBottom2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.6 } },
  };

  const [iconSize, setIconSize] = useState(14);

  useEffect(() => {
    // Function to set size
    const updateSize = () => {
      if (window.innerWidth >= 768) {
        // MD breakpoint in Tailwind is 768px
        setIconSize(22);
      } else {
        setIconSize(14);
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

  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  // HUBSPOT
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const PORTAL_ID = "21145626";
    const FORM_ID = "24afa490-c2a4-4e5c-9a0f-22e1b5f3001a";

    if (!name || !email || !message) {
      console.error("Form fields are missing");
      return;
    }

    const requestBody = {
      portalId: PORTAL_ID,
      formGuid: FORM_ID,
      fields: [
        {
          name: "firstname",
          value: name,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "description",
          value: message,
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
        setName(""); // Reset the name field
        setEmail(""); // Reset the email field
        setMessage(""); // Reset the message field
        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
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
    <>
      <div className="bg-white h-max font-mono">
        <div className="flex flex-col justify-center w-full lg:w-[800px] items-center mx-auto p-5">
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            animate="visible"
          >
            <h1 className="flex justify-center text-black font-extrabold text-[50px] md:text-[80px] lg:text-[100px] items-center pt-5">
              Get In Touch
            </h1>
            <h1 className="flex justify-center pb-2 text-gray-700 font-medium text-[12px] md:text-[16px] text-center items-center">
              Founded in 2020, Atlas is a cutting-edge software development
              agency dedicated to transforming ideas into impactful digital
              solutions. We pride ourselves on our technical prowess, innovative
              thinking, and commitment to pushing the boundaries of software
              engineering.
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromBottom2}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white flex justify-center items-center p-10">
            <div className="flex justify-center w-[370px] h-[500px] md:w-full md:h-[700px] lg:w-[1300px] lg:h-[700px] rounded-2xl shadow-2xl">
              <div className="flex flex-col w-[120px] h-[500px] md:w-[350px] md:h-[700px] lg:w-[550px] lg:h-[700px] bg-black text-white rounded-tl-2xl rounded-bl-2xl">
                <div className="p-3 md:p-16 md:space-y-11">
                  <div className="pb-4">
                    <h1 className="text-[20px] md:text-[30px] lg:text-[45px] font-bold leading-6 md:leading-normal mb-1">
                      Contact Details
                    </h1>
                    <p className="text-[10px] md:text-[12px] lg:text-[15px] font-light">
                      Reach out to our dedicated team at Atlas for inquiries,
                      collaborations, or any software needs via the contact
                      details below.
                    </p>
                  </div>
                  <div className="pb-4">
                    <h1 className="text-[16px] md:text-[24px] lg:text-[30px] font-normal">
                      Our Location
                    </h1>
                    <p className="text-[10px] md:text-[12px] lg:text-[15px] font-light">
                      300 SW 1st Avenue, Suite #155, Fort Lauderdale, FL 33301
                    </p>
                  </div>
                  <div className="pb-4">
                    {" "}
                    <h1 className="text-[16px] md:text-[24px] lg:text-[30px] font-normal">
                      Phone Number
                    </h1>
                    <button
                      className="text-[10px] md:text-[12px] lg:text-[15px] font-light transform hover:scale-105 transition-transform duration-300 ease-in-out"
                      onClick={handlePhoneClick}
                    >
                      (954) 459-4064{" "}
                    </button>
                  </div>
                  <div>
                    <h1 className="text-[16px] md:text-[24px] lg:text-[30px] font-normal pb-4">
                      Social Links
                    </h1>
                    <div className="flex space-x-3 md:space-x-5">
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
                      {/*Mail link */}

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
              <div className="bg-gray-tan w-[250px] h-[500px] md:w-[450px] md:h-[700px] lg:w-[750px] lg:h-[700px] text-black rounded-tr-2xl rounded-br-2xl flex justify-center items-center">
                <form onSubmit={handleSubmit}>
                  <div className="bg-white w-[230px] h-[475px] text-[14px] md:text-[18px] md:w-[370px] md:h-[650px] lg:w-[600px] lg:h-[600px] flex flex-col justify-center items-center p-2 md:p-4 rounded-2xl space-y-5">
                    {/* Name Text Box */}
                    <input
                      type="text"
                      name="firstname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="bg-gray-tan w-full h-[40px] md:h-[50px] border rounded-xl px-3 shadow-sm"
                      required={true}
                    />

                    {/* Email Text Box */}
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-gray-tan w-full h-[40px] md:h-[50px] border rounded-xl px-3 shadow-sm"
                      required={true}
                    />

                    {/* Message Text Box */}
                    <textarea
                      name="description"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className="bg-gray-tan w-full h-[260px] md:h-[280px] border rounded-xl p-3 shadow-sm"
                      required={true}
                    ></textarea>

                    {/* Send Message Button */}
                    <button
                      type="submit"
                      value="Submit"
                      className="text-[14px] md:text-[16px] w-full h-[40px] md:h-[50px] bg-black text-white rounded-xl transform hover:scale-95 transition-transform duration-500 ease-in-out"
                    >
                      Send Message
                    </button>
                    {/* <div className="flex items-center space-x-2 mt-3">
                      <input
                        type="checkbox"
                        id="subscribeCheckbox"
                        checked={isChecked}
                        onChange={handleChange}
                        className="h-4 w-4 text-black"
                        required={false}
                      />
                      <label
                        htmlFor="subscribeCheckbox"
                        className="font-light text-[10px] md:text-[14px]"
                      >
                        Subscribe to our newsletter and stay up to date!
                      </label>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Newsletter />

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 shadow-2xl ">
          <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gray-tan flex items-center justify-center relative rounded-2xl">
            <p className="text-black text-[12px] md:text-[40px] font-medium">
              Message Sent!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-black rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-300"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
