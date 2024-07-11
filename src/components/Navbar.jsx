import React from "react";

const Navbar = ({ sections }) => {
  const handleScroll = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" w-[100%] h-[80px] fixed top-0 left-0 bg-[#22222226] bg-opacity-50 backdrop-blur-xl flex flex-col text-white justify-center items-center z-20">
      <ul className=" flex gap-10">
        <li>
          <button onClick={() => handleScroll(sections.hero)}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll(sections.skills)}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleScroll(sections.projects)}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => handleScroll(sections.contact)}>
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
