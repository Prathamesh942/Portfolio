import { useRef } from "react";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="">
      <Navbar
        sections={{
          hero: heroRef,
          skills: skillsRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <ProjectSection />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
