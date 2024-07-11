import React, { useEffect, useState } from "react";
import "../App.css";

const Hero = () => {
  return (
    <div className=" w-[100%] h-screen bg-[#110f1a] text-white flex justify-center items-center ">
      <div className=" flex flex-col gap-5 z-10 justify-center items-center ">
        <div className=" flex flex-col justify-center items-center">
          <p className=" herosm">Hii 👋, I'm</p>
          <h2 className=" text-[90px] hero ">PRATHAMESH</h2>
        </div>
        <div></div>
        <span className=" border rounded-2xl px-2 p-1 text-[20px]">
          Frontend Developer 🧑‍💻
        </span>
        <span className=" text-[30px] ">
          With a passion for both{" "}
          <span className=" italic gradient-text font-medium">design</span> and
          <pre>{"  <>Functionality</>"}</pre>
        </span>
        <button className=" p-3 bg-white text-[#641AFF] font-bold">
          img RESUME
        </button>
      </div>
      <div className=" absolute left-[50%] bottom-0 w-[50%] translate-x-[-50%] flex justify-end">
        <div className=" absolute translate-y-[-50%] bg-[#641AFF] w-[50%] h-[300px] rounded-full blur-[100px] an"></div>
        <div className=" relative bg-[#CB5EFF] w-[50%] h-[300px] rounded-full blur-[100px] an2 left-0"></div>
      </div>
      <div className=" absolute flex w-[100%] left-0 justify-evenly">
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
        <div className=" w-[1px] h-screen bg-[#59595963]"></div>
      </div>
      <div className=" absolute w-[100%] h-screen flex flex-col left-0  justify-evenly">
        <div className=" w-[100%] h-[1px] bg-[#59595963]"></div>
        <div className=" w-[100%] h-[1px] bg-[#59595963]"></div>
        <div className=" w-[100%] h-[1px] bg-[#59595963]"></div>
        <div className=" w-[100%] h-[1px] bg-[#59595963]"></div>
      </div>
    </div>
  );
};

export default Hero;
