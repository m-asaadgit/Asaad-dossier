import gsap from "gsap";
import React, { useEffect } from "react";

function Service() {
//   useEffect(() => {
//     gsap.fromTo(".card", {opacity:0, scale:0.5 }, {
//         opacity: 1,
//         scale:1,
//         duration: 2,
//         scrollTrigger: {
//             trigger: ".card",
//             start: 'top 90%',
//             end: 'bottom 70%',
            
//         },
//     });
//  }, []);
  return (
    <div className="w-screen  flex flex-col justify-center items-center mb-24 ">
      <h3 className="font-thin text-3xl  ">What i offer</h3>
      <h1 className="font-extrabold md:text-5xl tracking-wider text-lg text-[rgb(24,25,54)] mb-4 mt-2">
        Services
      </h1>

      <p className=" font-medium  md:px-20 px-8 md:w-[90%] pb-4 text-center  text-[rgb(25,26,54)] md:h-[15%] md:leading-snug md:tracking-wide ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolores
        labore nulla fugiat aut maiores accusantium perspiciatis recusandae
        distinctio nostrum cupiditate eaque, non, tempore, voluptatibus nesciunt
        iusto magni expedita vel.
      </p>
      <div className=" flex pt-8 md:flex-row flex-col justify-center items-center gap-8 md:gap-16">
        <div className="md:w-[35vh] card  w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="flex flex-col   gap-2 px-4 md:pt-4  md:text-xl font-semibold">
             Full-Stack Development
          </h1>
          <p className="px-4 font-thin py-2  w-[100%] cen active:font-medium">
            MERN stack (MongoDB, Express, React, Node)
          </p>
        </div>{" "}
        <div className="md:w-[35vh] card  w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="flex flex-col  gap-2 px-4 md:pt-4  md:text-xl font-semibold">
            {/* <RiSpeakFill /> */}
            Front-End Development{" "}
          </h1>
          <p className="px-4 font-thin py-2  w-[100%] cen active:font-medium">
            HTML, CSS, JavaScript (React)
          </p>
        </div>{" "}
        <div className="md:w-[35vh] card  w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="flex flex-col  gap-2 px-4 md:pt-4  md:text-xl font-semibold">
            {/* <RiGraduationCapFill /> */}
            Back-End Development{" "}
          </h1>
          <p className="px-4 font-thin py-2  w-[100%] cen active:font-medium">
            Node.js, Express.js, RESTful API
          </p>
        </div>{" "}
        <div className="md:w-[35vh] card  w-[70vw] h-[50vw] pt-4 hover:scale-105 transition-all duration-200 hover:bg-white active:bg-white active:text-[rgb(24,25,54)]  hover:text-[rgb(24,25,54)] md:h-[35vh] bluec rounded-sm border-1 text-gray-100 border-gray-300 shadow-2xl  shadow-gray-900">
          <h1 className="flex flex-col  gap-2 px-4 md:pt-4  md:text-xl font-semibold">
            {/* <AiFillProject /> */}
            UI/UX Design
          </h1>
          <p className="px-4 font-thin py-2  w-[100%] cen active:font-medium">
            User interface and experience design with Figma
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
