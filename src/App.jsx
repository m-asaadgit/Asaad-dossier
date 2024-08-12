
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import TopNav from './components/TopNav'
// import Marque from './components/Marque'
// import Header from './components/Header'
import Home from './pages/Home'
import Marque from './components/Marque'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import MySvgIcon from "./MySvgIcon";
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
import MySvgIcon from './components/MySvgIcon'
import Footer from './components/Footer'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [menu, setMenu] = useState(false);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);



  // if (menu) {
  //   gsap.to("menu", {
  //     x: "300px",
  //   });
  // const [opacity, setOpacity] = useState(1);
  // const [navHover, setNavHover] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > window.innerHeight * 0.1 && !navHover) {
  //     setOpacity(0.7);
  //   } else if (!navHover) {
  //     setOpacity(1);
  //   }
  // };

  // const handleMouseEnter = () => {
  //   setNavHover(true);
  //   setOpacity(1);
  // };

  // const handleMouseLeave = () => {
  //   setNavHover(false);
  //   if (window.scrollY > window.innerHeight * 0.1) {
  //     setOpacity(0.7);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [navHover]);
  const [morphism, setMorphism] = useState({
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  });
  const [navHover, setNavHover] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1 && !navHover) {
      setMorphism({
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      });
    } else if (!navHover) {
      setMorphism({
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      });
    }
  };

  const handleMouseEnter = () => {
    setNavHover(true);
    setMorphism({
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 1)',
    });
  };

  const handleMouseLeave = () => {
    setNavHover(false);
    if (window.scrollY > window.innerHeight * 0.1) {
      setMorphism({
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      });
    } else {
      setMorphism({
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navHover]);

  return (
   <div className='bg-zinc-200   relative m-0 p-0 w-[100vw]  '>
   <div
      className="topnav bg-gradient-to-r fixed top-0 w-[100vw] left-0 z-50 from-slate-100 via-slate-200 font-normal px-1 md:px-[5%] to-slate-100 flex lg:bg-red-500 h-[15vh] shadow-md rounded-b-md justify-around md:justify-between items-center"
      style={morphism}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[80%] overflow-hidden w-[35%] md:w-[20%]  flex  justify-center items-center">
        <MySvgIcon></MySvgIcon>
      </div>

      <div className="hidden  md:flex  px-6 rounded-l-full rounded-r-full text-white  font-thin py-2 text-lg gap-5 justify-center items-center  ">
        {" "}
        <Link
         onClick={() => {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }}

          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm sm:text-red-400  md:text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
        >
          Home <FaHome />
        </Link>
        <Link
          onClick={() => {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
        >
          About <MdDescription></MdDescription>
        </Link>
        <Link
         onClick={() => {
          serviceRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
        >
          services <RiServiceFill />
        </Link>
       
        <Link
         onClick={() => {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }}
          className="transition-transform duration-[800ms] transform font-extralight  h-[100%] justify-center items-center gap-[2.8px]  center px-2 flex rounded-sm text-black hover:text-white  hover:scale-110  text-xl hover:bg-[rgb(26,25,54)]"
        >
          Contact <FaArrowTrendUp></FaArrowTrendUp>
        </Link>
      </div>
      <div className="md:w-[20%]  w-[35%] h-[100%] text-[17px]  md:text-xl  hidden md:flex items-center justify-center ">
        <Link
       
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
          menu ? "-right-1" : "-right-56"
        } transition-all duration-200 pr-24  pl-8 rounded-l-md  pt-16 pb-12 gap-8`}
      >
        <Link className="absolute z-100   top-6 right-8 ">
          <GrClose
            color="white"
            onClick={() => setMenu(false)}
            size={24}
          ></GrClose>
        </Link>
        <Link
          onClick={() => {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
            setMenu(false);
          }}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          Home
        </Link> <Link
          onClick={() => {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
            setMenu(false);
          }}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          About
        </Link>

        <Link
           onClick={() => {
            serviceRef.current.scrollIntoView({ behavior: "smooth" });
            setMenu(false);
          }}
          className=" text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          Service
        </Link>
        {/* <Link
           onClick={() => {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
            setMenu(false);
          }}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          Work
        </Link> */}
        <Link
       onClick={() => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        setMenu(false);
      }}
          className="text-white px-2 active:scale-[1.3] transition-transform duration-200"
        >
          Contact
        </Link> 
      </div>
    </div>
    


<div ref={homeRef} className="about relative -top-32 " ></div>

<Home ></Home>

<div ref={aboutRef} className="about relative -top-32 " ></div>
<About   ></About>


<div ref={serviceRef} className="service relative -top-32 " ></div>

<Service></Service>
<div ref={contactRef} className="service relative -top-32 " ></div>

<Contact></Contact>
<Footer>

</Footer>

   </div>
  )
}

export default App
