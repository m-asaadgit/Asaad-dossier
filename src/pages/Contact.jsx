import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form 
      action="https://api.web3forms.com/submit" 
      method="POST"
      className="md:w-[80vw] w-[90vw] flex flex-col  rounded-b-none rounded-md items-center mx-auto md:h-[100vh] pb-12 bg-white"
    >
      <input type="hidden" name="access_key" value="503f0bda-aac0-4cfd-ba6e-a1418a08d802" />
      
      <h3 className="font-thin text-2xl md:mt-8 mt-12">connect with me</h3>
      <h1 className="font-extrabold tracking-wider text-4xl text-[rgb(24,25,54)] mt-2">
        Get in touch
      </h1>
      <p className="md:w-[50%] mt-2 md:h-[15%] w-[80%] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        cupiditate. Porro tempore rem velit itaque officia commodi et
        necessitatibus sit!
      </p>
      <div className="md:flex md:mb-4 mt-4 w-[65%] md:h-[8%] h-[20%] md:gap-[2%]">
        <textarea required
          name="name"
          value={formData.name} 
          onChange={handleChange}
          className="resize-none tracking-wider mb-4 block shadow-2xl border-none outline-none shadow-gray-500 h-[35%] rounded-sm py-1 md:h-full px-2 md:text-xl md:w-[49%] w-full text-white bg-[rgb(24,25,54)]"
          placeholder="Name"
        ></textarea>
        <textarea required
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="resize-none tracking-wider block shadow-2xl border-none outline-none shadow-gray-500 h-[35%] rounded-sm py-1 md:h-full px-2 md:text-xl md:w-[49%] w-full text-white bg-[rgb(24,25,54)]"
          placeholder="Email"
        ></textarea>
      </div>
      <textarea required
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="mt-1 resize-none tracking-wider shadow-2xl border-none outline-none shadow-gray-500 rounded-sm py-1 h-[20%] md:h-[30%] px-2 md:text-lg w-[65%] text-white bg-[rgb(24,25,54)]"
        placeholder="Send message"
      ></textarea>
      <button
        type="submit"
        className="flex justify-center tracking-wide font-semibold text-[10px] mt-4 md:text-xl bg-[rgb(26,25,54)] text-white text-nowrap items-center border-black border-[1.6px] rounded-sm md:ml-[52.5%] ml-[45%] w-[20%] px-2 md:w-32 gap-2 md:h-12 h-8 transition-all duration-400 active:scale-105"
      >
        Send
      </button>
    </form>
  );
}

export default Contact;
