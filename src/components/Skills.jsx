import React from "react";

const mySkills = [
  {
    skill: "HTML",
    img: "/star.png",
  },
  {
    skill: "Css",
    img: "/star.png",
  },
  {
    skill: "Javascript",
    img: "/star.png",
  },
  {
    skill: "Tailwind",
    img: "/star.png",
  },
  {
    skill: "Typescript",
    img: "/star.png",
  },
  {
    skill: "Reactjs",
    img: "/star.png",
  },
  {
    skill: "Responive Design",
    img: "/star.png",
  },
  {
    skill: "MongoDb",
    img: "/star.png",
  },
];

const Skills = () => {
  return (
    <div className=" w-[100%] bg-[#110f1a] p-10 py-20 text-white flex justify-center items-center flex-col max-md:p-5 ">
      <h2 className=" text-[50px]">Skills</h2>
      <div className=" w-[70vw] flex flex-wrap gap-5 p-20 text-xl justify-center select-none max-md:w-[100%]  max-md:p-6">
        {mySkills.map((item) => {
          return (
            <div className="p-2 border rounded-lg flex justify-center items-center gap-2 hover:shadow-md hover:shadow-[#c367d8] transition duration-30 ease-in-out">
              <img src={item.img} className="size-5" />
              <span>{item.skill}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
