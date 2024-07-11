import "./App.css";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <ProjectSection />
      <ContactUs />
    </div>
  );
}

export default App;
