import React, { useState } from "react";
import { Link } from "react-router-dom";
import MySvgIcon from "./MySvgIcon";
import { FaMoon } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { gsap } from "gsap";
import { GrClose } from "react-icons/gr";

function TopNav() {
  const [isHovered, setIsHovered] = useState(false);
  const [menu, setMenu] = useState(false);
  console.log(menu);

  if (menu) {
    gsap.to("menu", {
      x: "300px",
    });
  }

  return (
    <div className="bg-gradient-to-r fixed  top-0 w-[100vw] left-0  z-50 opacity-85 from-slate-100 via-slate-200 font-normal px-1 md:px-[5%]	to-slate-100 flex  lg:bg-red-500  h-[15vh]  shadow-md rounded-b-md justify-around md:justify-between items-center ">
      <div className="h-[80%] overflow-hidden w-[35%] md:w-[20%]  flex  justify-center items-center">
        <MySvgIcon></MySvgIcon>
      </div>

      <div className="hidden  md:flex  px-6 rounded-l-full rounded-r-full text-white  font-thin py-2 text-lg gap-5 justify-center items-center  ">
        {" "}
        <Link
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm sm:text-red-400  md:text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
          to="./"
        >
          Home <FaHome />
        </Link>
        <Link
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
          to="/aboutme"
        >
          About <MdDescription></MdDescription>
        </Link>
        <Link
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
          to="/services"
        >
          services <RiServiceFill />
        </Link>
        <Link
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
          to="/mywork"
        >
          work <MdOutlineWork></MdOutlineWork>
        </Link>
        <Link
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
          to="/contact"
        >
          Contact <FaArrowTrendUp></FaArrowTrendUp>
        </Link>
      </div>
      <div className="md:w-[20%]  w-[35%] h-[100%] text-[17px]  md:text-xl  hidden md:flex items-center justify-center ">
        <Link
          to="./contact"
          className={`font-normal flex justify-center text-[10px] md:text-xl  bg-[rgb(26,25,54)] text-white h-[40%] text-nowrap items-center  border-black border-[1.6px] rounded-r-full rounded-l-full px-2 w-[90%] gap-2 hover:bg-white hover:text-[rgb(26,25,54)] transition-all duration-400 hover:scale-105`}
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
        </Link>
      </div>
      <div className="cen relative -right-4 md:right-0  gap-8 md:gap-6">
        <FaMoon />
        <MdMenuOpen
          className="md:hidden"
          onClick={() => setMenu(true)}
          size={30}
        />
      </div>
      <div
        className={`md:hidden menu absolute text-xl  font-thin bluec text-white flex flex-col -top-2 ${
          menu ? "-right-1" : "-right-48"
        } transition-all duration-200 pr-12  pl-12 rounded-l-md  pt-16 pb-12 gap-12`}
      >
        <Link className="absolute z-100   top-6 right-4 ">
          <GrClose
            color="white"
            onClick={() => setMenu(false)}
            size={24}
          ></GrClose>
        </Link>
        <Link
          onClick={() => {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
            setMenu(false);
          }}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          About
        </Link>

        <Link
          onClick={() => setMenu(false)}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          Service
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          Work
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
