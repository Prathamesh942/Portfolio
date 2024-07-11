import React from "react";

const Navbar = () => {
  return (
    <div className=" w-[100%] h-[80px] fixed top-0 left-0 bg-[#22222226] bg-opacity-50 backdrop-blur-xl flex flex-col text-white justify-center items-center z-20">
      <ul className=" flex gap-10">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
