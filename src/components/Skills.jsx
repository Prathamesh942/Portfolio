import React, { forwardRef } from "react";

const mySkills = [
  {
    skill: "HTML",
    img: "/star.png",
  },
  {
    skill: "CSS",
    img: "/star.png",
  },
  {
    skill: "Tailwind",
    img: "/star.png",
  },
  {
    skill: "JavaScript",
    img: "/star.png",
  },
  {
    skill: "TypeScript",
    img: "/star.png",
  },

  {
    skill: "React.js",
    img: "/star.png",
  },
  {
    skill: "Responsive Design",
    img: "/star.png",
  },
  {
    skill: "Redux",
    img: "/star.png",
  },
  {
    skill: "MongoDB",
    img: "/star.png",
  },
  {
    skill: "Node.js",
    img: "/star.png",
  },
  {
    skill: "Express.js",
    img: "/star.png",
  },
  {
    skill: "Websockets",
    img: "/star.png",
  },
  {
    skill: "Git",
    img: "/star.png",
  },
  {
    skill: "Figma",
    img: "/star.png",
  },
  {
    skill: "SQL",
    img: "/star.png",
  },
];

const Skills = forwardRef((props, ref) => {
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
});

export default Skills;
