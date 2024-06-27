import React, { useEffect, useState } from "react";
import "../App.css";

const Hero = () => {
  const [sy, setSy] = useState(0);
  const [sx, setSx] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSy(scrollY);
    });
    window.addEventListener("mousemove", (e) => {
      setSx(e.clientX);
      setSy(e.clientY / 30);
    });
  }, []);
  console.log(sy);
  console.log(sx);
  return (
    <div className=" w-screen h-screen bg-[#131313] text-white">
      {/* stars */}
      <div
        className={` layer1 w-screen h-screen absolute`}
        style={{
          transform: `translateY(${sy / 6}px) translateX(${sx * 0.02}px)`,
        }}
      >
        <img
          className=" size-6 absolute top-[10%] left-[20%] rotate-45"
          src="./star.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[50%] left-[29%]"
          src="./star.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[80%] left-[10%] rotate-45"
          src="./star.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[90%] left-[90%]"
          src="./star.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[20%] left-[80%] rotate-45"
          src="./star.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[90%] left-[40%]"
          src="./star.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[30%] left-[50%] rotate-45"
          src="./star.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[70%] left-[70%] rotate-45"
          src="./star.png"
          alt=""
        />
      </div>
      <div
        className="layer2 w-screen h-screen absolute"
        style={{
          transform: `translateY(${-sy / 4}px)  translateX(${sx * -0.01}px)`,
        }}
      >
        <img
          className=" size-6 absolute top-[10%] left-[45%] blur-[2px] rotate-45"
          src="./starb.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[30%] left-[15%] blur-[2px]"
          src="./starb.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[50%] left-[50%] blur-[2px] rotate-45"
          src="./starb.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[70%] left-[30%] blur-[2px]"
          src="./starb.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[60%] left-[65%] blur-[2px] rotate-45"
          src="./starb.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[15%] left-[30%] blur-[2px]"
          src="./starb.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[45%] left-[85%] blur-[2px] rotate-45"
          src="./starb.png"
          alt=""
        />
        <img
          className=" size-6 absolute top-[20%] left-[95%] blur-[2px] rotate-45"
          src="./starb.png"
          alt=""
        />
      </div>
      {/* corner blur */}
      <div className=" flex absolute right-0 bottom-0">
        <div className=" bg-[#00FFA3] size-[200px] rounded-full blur-3xl"></div>
        <div className=" bg-[#0066FF] size-[150px] rounded-3xl blur-3xl"></div>
        <img
          className=" absolute w-[400px] h-[500px] object-cover bottom-0"
          style={{
            transform: `translateY(${sy / 6}px) translateX(${sx * 0.02}px)`,
          }}
          src="./astro.gif"
          alt=""
        />
      </div>
      {/* text */}
      <div className=" flex flex-col absolute top-[30%] left-[10%]">
        <span className=" font-bold italic text-3xl">Hello👋, I’m</span>
        <span className=" text-[80px] font-black">PRATHAMESH</span>
        <button className=" ">Resume</button>
      </div>
      {/* oval  */}
      <div
        className=" w-[80%] h-[400px]  absolute top-[-40%] left-[50%] translate-x-[-50%] oval z-10"
        style={{ "border-radius": "100%" }}
      ></div>
      <div
        className=" w-[80%] h-[400px] bg-[#1376FF] absolute top-[-40%] left-[50%] translate-x-[-50%] blur-3xl"
        style={{ "border-radius": "100%" }}
      ></div>
      <div>
        <div className=" flex justify-evenly">
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
          <div className=" h-screen w-[2px] bg-white opacity-[0.1]"></div>
        </div>
        <div className=" h-screen w-screen flex flex-col justify-evenly absolute top-0">
          <div className=" h-[2px] w-screen bg-white opacity-[0.1] "></div>
          <div className=" h-[2px] w-screen bg-white opacity-[0.1] "></div>
          <div className=" h-[2px] w-screen bg-white opacity-[0.1] "></div>
          <div className=" h-[2px] w-screen bg-white opacity-[0.1] "></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
