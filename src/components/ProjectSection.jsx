import React, { forwardRef } from "react";

const projects = [
  {
    title: "Furnit",
    description:
      "A responsive e-commerce platform for a furniture company featuring product browsing, filtering, and a shopping cart.",
    imageUrl: "/furnit.png",
    liveDemo: "http://furnitstore.vercel.app",
    codeLink: "http://github.com/Prathamesh942/Furnit",
  },
  {
    title: "Twine",
    description:
      "A full-stack social media application inspired by Threads, offering real-time updates, user profiles, and post interactions.",
    imageUrl: "/twine.png",
    liveDemo: "https://threads-zeta-peach.vercel.app/",
    codeLink: "https://github.com/Prathamesh942/Threads",
  },
  {
    title: "Ideas Tracker",
    description:
      "A web application to track and manage project ideas with features for idea submission, categorization, and progress tracking.",
    imageUrl: "/ideas.png",
    liveDemo: "http://ideas-tracker-9edn.vercel.app",
    codeLink: "http://github.com/Prathamesh942/Ideas-tracker",
  },
];

const ProjectSection = forwardRef((props, ref) => {
  return (
    <div className="p-10 py-20 bg-[#110f1a] text-white flex flex-col justify-center items-center max-md:px-5">
      <h2 className=" text-[50px]">My Projects</h2>
      <div className=" flex flex-wrap justify-evenly items-center w-[100%] p-20 max-md:p-5 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[40vw] max-md:w-[100vw]"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProjectSection;
