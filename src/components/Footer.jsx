// import React from 'react'

// function Footer() {
//   return (
//     <div className='w-[100vw] h-[3vh] bg-green-400'>

//     </div>
//   )
// }

// export default Footer
import gsap from "gsap";
import React, { useEffect } from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".card",
  //     { y:"5vh" },
  //     {
  //       y: "-5vh",
  //       ease:"bounce.inOut",
  //       duration: 0.1,
  //       scrollTrigger: ".trigger",
  //     }
  //   );
  // }, []);
  return (
    <footer className="container mx-auto bg-[rgb(24,25,54)] trigger card px-4">
      <div className="flex flex-col  md:flex-row md:justify-between px-4">
        <div className="mb-6  md:mb-0">
          <h2 className="text-xl font-semibold mt-4 pb-1 tracking-wide text-white">
            Contact Me
          </h2>
          <p className="mb-1 text-gray-300">
            Email:{" "}
            <a className="text-blue-400 hover:underline">
              Asaaddangi20gmail.com
            </a>
          </p>
          <p className="mb-2 text-gray-300">
            Phone:{" "}
            <a
              href="tel:+917022909765"
              className="text-blue-400 hover:underline"
            >
              +91 7022909765
            </a>
          </p>
        </div>

        <div className="mb-6 md:pt-4 pr-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 tracking-wide text-white">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/AsaadDangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <RiTwitterXFill
                color="white"
                className="hover:scale-110"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/asaad-dangi-061785261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaLinkedin color="white" className="hover:scale-110" size={24} />
            </a>
            <a
              href="https://instagram.com/M.axaad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400"
            >
              <RiInstagramFill color="white" className="hover:scale-110" size={24} />
            </a>{" "}
            <a
              href="https://github.com/m-asaadgit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400"
            >
              <FaGithub color="white" className="hover:scale-110" size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Mohammed Asaad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
