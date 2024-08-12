import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import vs from "../../src/assets/vscode.png";
import post from "../../src/assets/postman.png";
import mongo from "../../src/assets/mongodb.png";
import figma from "../../src/assets/fig.png";
import adobe from "../../src/assets/adobe.png";
import github from "../../src/assets/git.png";
import msexcel from "../../src/assets/ms-excel.png";
import html from "../../src/assets/html.png";
import css from "../../src/assets/css.png";
import dbms from "../../src/assets/dbms.png";
import java from "../../src/assets/java.png";
import py from "../../src/assets/py.png";
import js from "../../src/assets/js.png";
import ts from "../../src/assets/ts.png";
import tail from "../../src/assets/tail.png";
import r from "../../src/assets/r.png";
import gsapic from "../../src/assets/gsap.png";
import next from "../../src/assets/next.png";
import c from "../../src/assets/c.png";
import dl from "../../src/assets/dl.png";
import dv from "../../src/assets/dv.png";
import ex from "../../src/assets/ex.png";
import lin from "../../src/assets/linux.png";
import mui from "../../src/assets/mui.png";
import node from "../../src/assets/node.png";
import sql from "../../src/assets/sql.png";
import react from "../../src/assets/react.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";


function About() {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".card",
  //     { scale: 0.7 },
  //     {
  //       scale: 1,
  //       duration: 0.1,
  //       scrollTrigger: ".trigger",
  //     }
  //   );
  // }, []);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(min-width: 768px)"); // md breakpoint (768px)

  //   const animateCards = () => {
  //     if (mediaQuery.matches) {
  //       gsap.from(".card", {
  //         scrollTrigger: {
  //           trigger: ".card",
  //           start: "top 75%",
  //           end: "bottom 25%",
  //           toggleActions: "play none none none",
  //         },
  //         opacity: 0,
  //         scale: 0.8,
  //         duration: 1.5,
  //         ease: "power2.out",
  //         stagger: 0.3,
  //       });
  //     }
  //   };

  //   // Run the animation on initial load
  //   animateCards();

  //   // Add a listener for media query changes
  //   mediaQuery.addListener(animateCards);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     mediaQuery.removeListener(animateCards);
  //   };
  // }, []);
  return (
    <div className="md:w-[90vw] trigger rounded-md flex flex-col  h-fit md:mx-auto   ">
      <h1 className="  md:text-5xl md:px-20 px-8 md:pt-6 pb-4 font-extrabold text-2xl text-[rgb(25,26,54)] md:leading-snug md:tracking-wider">
        About me!
      </h1>
      <p className=" font-medium  md:px-20 px-8 md:w-[90%] pb-8  text-[rgb(25,26,54)] md:h-[20%] md:leading-snug md:tracking-wider ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolores
        labore nulla fugiat aut maiores accusantium perspiciatis recusandae
        distinctio nostrum cupiditate eaque, non, tempore, voluptatibus nesciunt
        iusto magni expedita vel. 
      </p>
      <div className=" flex md:flex-row flex-col justify-center items-center gap-8 md:gap-16">
        <div className=" md:w-[35vh] w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="animate-h1 flex flex-col  gap-2 px-4 md:pt-4  md:text-xl font-semibold">
            <FaCode />
            Stack{" "}
          </h1>
          <p className="animate-p px-4 font-thin py-2  w-[100%] cen active:font-medium">
            React.Js, Node.js, Tailwind CSS, Typescript Next.js, Express.js and
            more
          </p>
        </div>{" "}
        <div className=" md:w-[35vh]  w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="flex flex-col  gap-2 px-4 md:pt-4  md:text-xl font-semibold">
            <RiSpeakFill />
            Langauges{" "}
          </h1>
          <p className="px-4 font-thin py-2  w-[100%] cen active:font-medium">
            English, Kannada, Hindi, and three more local languages
          </p>
        </div>{" "}
        <div className="md:w-[35vh]  w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="flex flex-col  gap-2 px-4 md:pt-4  md:text-xl font-semibold">
            <RiGraduationCapFill />
            Education{" "}
          </h1>
          <p className="px-4 font-thin py-2  w-[100%] cen active:font-medium">
            Bachelor in Computer Application
          </p>
        </div>{" "}
        <div className="md:w-[35vh]  w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="flex flex-col  gap-2 px-4 md:pt-4  md:text-xl font-semibold">
            <AiFillProject />
            Projects{" "}
          </h1>
          <p className="px-4 font-thin py-2  w-[100%] cen active:font-medium">
            Have built more than 4 Project from scratch
          </p>
        </div>
      </div>

      <div className="  w-[100%] px-4 h-[30vh] md:my-20 mt-20 mb-4">
        <h1 className="md:text-3xl text-lg md:px-20 px-8 md:pt-6 pb-4 font-bold text-[rgb(25,26,54)] md:leading-snug md:tracking-normal">
          Tools at My Disposal
        </h1>
        <section
          className="md:w-full  w-[80%] h:[50%] pl-16 md:pl-60 md:pt-4 flex flex-wrap gap-4  md:gap-8items-center  md:h-[65%] 
        "
        >
          <div className="md:h-[60%]  w-[25%] cen p-[1px] md:w-[8%] ">
            <img
              src={vs}
              className="h-full md:hover:scale-105 transition-all duration-200ms active:scale-110 w-full object-contain bg-blend-color-burn  "
              alt="vs code"
            />
          </div>
          <div className="md:h-[60%]    cen md:w-[8%] w-[25%]  ">
            <img
              
              src={post}
              className="h-full cen md:hover:scale-105 transition-all duration-200ms active:scale-110  w-full mix-blend-darken bg-blend-color-burn  object-contain"
              alt=""
            />
          </div>
          <div className="h-[60%]  py-[1px] cen ml-2 w-[25%] md:w-[8%]  ">
            <img
              src={mongo}
              className="h-full md:hover:scale-105 transition-all duration-200ms active:scale-110  w-full mix-blend-darken bg-blend-color-burn  object-contain"
              alt=""
            />
          </div>
          <div className="md:h-[50%]  pt-2 cen md:pt-4 h-[50%] ml-2 w-[20%]  md:w-[8%] ">
            <img
              src={msexcel}
              className="h-full md:hover:scale-105 transition-all duration-200ms active:scale-110  w-full object-contain mix-blend-darken bg-blend-color-burn  "
              alt=""
            />
          </div>{" "}
          <div className="md:h-[80%]  w-[30%] px-1  relative    md:w-[8%] ">
            <img
              src={github}
              className="md:h-[75%] h-[100%]  md:hover:scale-105 transition-all duration-200ms active:scale-110  w-full  object-contain mix-blend-darken bg-blend-color-burn  "
              alt=""
            />
          </div>{" "}
          <div className="md:h-[60%] relative pt-1  w-[25%] md:w-[8%] ">
            <img
              src={figma}
              className="h-full md:hover:scale-105 transition-all duration-200ms active:scale-110 absolute top-0   w-full object-contain mix-blend-darken bg-blend-color-burn  "
              alt=""
            />
          </div>
        </section>
      </div>

      <div className="w[100vw]   mx-4 md:mx-16 border-md border-gray-300 px-2 py-4 h-[140vh] mb-12 mt-4 bg-[rgb(24,25,54)] rounded-md flex flex-wrap justify-around  ">
        <div className="w-full h-[40vh] mb-12 pt-8 ">
          <h1 className="md:text-2xl text-xl  capitalize tracking-wide font-semibold text-white md:px-8 px-4">
            Proficiency
          </h1>
          <section className="flex flex-wrap  md:gap-8 gap-4 pl-2 justify-stretch  pb-8 pt-4 mx-auto w-[80%] h-[70%]">
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)] md:w-40 active:scale-105 hover:scale-105  top-10   px-2 py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh] w-[45%] h-[30%] flex gap-4">
              HTML{" "}
              <img
                src={html}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center gap-2  justify-start">
              Javascript{" "}
              <img
                src={js}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center gap-2 justify-start">
              Tailwind{" "}
              <img
                src={tail}
                alt=""
                className="mix-blend-darken h-[80%] w-[16] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              React{" "}
              <img
                src={react}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              Node{" "}
              <img
                src={node}
                alt=""
                className="mix-blend-darken h-full w-12  bg-blend-color-burn"
              />
            </h1>
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              Expess{" "}
              <img
                src={ex}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-">
              MongoDB{" "}
              <img
                src={mongo}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>{" "}
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              Gsap
              <img
                src={gsapic}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
          </section>
        </div>{" "}
        <div className="bor h-[2px] w-full mx-4 relative bg-gray-200">
          <p className="w-[8px] h-[400%] bg-gray-200 rounded absolute left-0 -top-[2.5px]">
            {" "}
          </p>
          <p className="w-[8px] h-[400%] bg-gray-200  rounded absolute right-0 -top-[2.5px]">
            {" "}
          </p>
        </div>
        <div className="w-full h-[40vh] mt-4  ">
          <h1 className="md:text-2xl text-xl  capitalize tracking-wide font-semibold text-white md:px-8 px-4">
            Core Competencies
          </h1>
          <section className="flex flex-wrap   md:gap-8 gap-4 pl-2 justify-stretch  py-4 mx-auto w-[80%] h-[70%]">
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)] md:w-40 active:scale-105 hover:scale-105  top-10   px-2 py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh] w-[45%] h-[30%] flex gap-4">
              DSA in C{" "}
              <img
                src={c}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center gap-2  justify-start">
              Next{" "}
              <img
                src={next}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center gap-2 justify-start">
              ms-excel{" "}
              <img
                src={msexcel}
                alt=""
                className="mix-blend-darken h-[80%] w-[16] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              MUI{" "}
              <img
                src={mui}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              Python{" "}
              <img
                src={py}
                alt=""
                className="mix-blend-darken h-full bg-green-400 w-12  bg-blend-color-burn"
              />
            </h1>
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              SQL{" "}
              <img
                src={sql}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
          </section>
        </div>{" "}
        <div className="bor h-[2px] w-full mx-4 relative bg-gray-200">
          <p className="w-[8px] h-[400%] bg-gray-200 rounded absolute left-0 -top-[2.5px]">
            {" "}
          </p>
          <p className="w-[8px] h-[400%] bg-gray-200  rounded absolute right-0 -top-[2.5px]">
            {" "}
          </p>
        </div>
        <div className="w-full h-[40vh] mt-4  ">
          <h1 className="md:text-2xl text-xl  capitalize tracking-wide font-semibold text-white md:px-8 px-4">
            Familiarity and Basics
          </h1>
          <section className="flex flex-wrap   md:gap-8 gap-4 pl-2 justify-stretch  py-4 mx-auto w-[80%] h-[70%]">
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)] pl-2 md:w-40 active:scale-105 hover:scale-105  top-10    py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh] w-[45%] h-[30%] flex ">
              Typescript{" "}
              <img
                src={ts}
                alt=""
                className="mix-blend-darken  h-[70%]  w-[20]  bg-blend-color-burn"
              />
            </h1>
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center gap-2  justify-start">
              Java{" "}
              <img
                src={java}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 text-sm font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center gap-4 justify-start">
              R
              <img
                src={r}
                alt=""
                className="mix-blend-darken h-[60%] w-[12] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              Linux{" "}
              <img
                src={lin}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
            <h1 className=" bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              Digital Logic{" "}
              <img
                src={dl}
                alt=""
                className="mix-blend-darken h-full bg-green-400 w-12  bg-blend-color-burn"
              />
            </h1>
            <h1 className="bg-gray-200 text-[rgb(24,25,54)]  md:w-40 active:scale-105 hover:scale-105  top-10   pl-2 pr-1  py-1 rounded-sm shadow-sm shadow-gray-100 font-thin cen md:h-[10vh]  w-[45%] h-[30%] flex items-center justify-start gap-4">
              SQL{" "}
              <img
                src={ex}
                alt=""
                className="mix-blend-darken h-full w-[20] bg-blend-color-burn"
              />
            </h1>
          </section>
        </div>{" "}
        {/* 
        
       
         
         */}
      </div>
    </div>
  );
}

export default About;
