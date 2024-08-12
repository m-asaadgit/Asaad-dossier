import React from "react";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

// import profile from "../assets/in"

function Home() {
  const dealNumber = "+917022909765";
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    // GSAP animation for each line
    gsap.fromTo(
      ".line",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        // stagger: 0,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".typing",
      {
        width: "0",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 4,
        ease: "steps(40, end)",
        delay: 1,
      }
    );
    gsap.to(".profile", {
      scale: "1",
      // transitionDuration:1
    });
  }, []);
  return (
    <div className="text-[rgb(26,25,54)]  md:mx-auto md:w-[85vw]  h-[100vh] md:h-[85vh] md:mt-[15vh] mt-[15vh]  md:flex md:gap-[10vw] md:justify-around md:items-center md:text-[10vh] font-extrabold md:leading-snug md:tracking-wider w-[95%]  mx-auto ">
      <div
        className="w-[90%] h-[80%] md:text-5xl flex md:ml-4 md:h-[100%] flex-col justify-start gap-3 mx-auto text-4xl pt-28 md:py-14 font-extrabold bg-none md:bg-[none]"
        style={{
          backgroundImage:
            window.innerWidth < 768
              ? `url('/src/assets/intro-section-illustration.png')`
              : "none",
          backgroundSize: "40vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"50% 20%",
          overflow: "visible",
        }}
      >
        {" "}
        <h1 className="line">Hey!, I'am</h1>
        <h1 className="line whitespace-wrap text-[5.1vh] md:text-5xl overflow-hidden">
          Mohammed Asaad
        </h1>
        <h1 className="line text-2xl whitespace-wrap  overflow-hidden">
          Full Stack Web Developer / UI UX Designer
        </h1>
        <h1 className="line animate-blink w-[90%]  whitespace-wrap leading-0 text-sm">
          MERN stack developer based in Bangalore
        </h1>
        <div className="w-[60%]  md:h-[20%]   h-[40%] text-[17px]  md:text-xl  flex flex-col gap-8 pt-4 md:pt-4  items-center justify-center ">
          <Link
            onClick={() => (window.location.href = `tel:${dealNumber}`)}
            className={` line md:hidden font-normal flex justify-center text-[10px] md:text-xl  bg-[rgb(26,25,54)] text-white h-[40%] text-nowrap items-center  border-black border-[1.6px] rounded-r-full rounded-l-full px-2 w-[90%] gap-2 active:bg-white active:text-[rgb(26,25,54)] transition-all duration-400 hover:scale-105`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            +91 7022909765
            <MdAddCall
              color={isHovered ? "rgb(26, 25, 54)" : "white"}
              size={window.innerWidth < 768 ? 15 : 25} // Inline condition for size
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>{" "}
          <button
            to="./contact"
            className={`line font-thin md:w-[70%] md:h-[10vh] flex justify-center text-[10px] md:text-xl  bg-[rgb(26,25,54)] text-white h-[40%] text-nowrap items-center  border-black border-[1.6px] rounded-r-full rounded-l-full px-2 w-[90%] gap-2 active:bg-white active:text-[rgb(26,25,54)] transition-all duration-400 hover:scale-105`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            My Resume <FaDownload></FaDownload>
          </button>
        </div>
      </div>
      <div className="hidden md:block  w-[60%] h-[90%] relative z-100">
        <img
          src="src/assets/intro-section-illustration.png"
          className="h-[90%] pt-10 profile scale-1 w-[80%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
