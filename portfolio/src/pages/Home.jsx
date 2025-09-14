import Hero from "../pages/Hero";
import About from "../pages/About";
import Education from "./Education";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Certifications from "../pages/Certifications";
import Social from "../pages/Social";
import Contact from "../pages/Contact";
import SpaceBackground from "../components/SpaceBackground";

const Home = () => {
  return (
    <>
      <SpaceBackground />

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <Hero />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <About />
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <Education />
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <Skills />
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <Projects />
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <Certifications />
        </div>
      </section>

      {/* Social (uncomment if you want) */}
      {/* <section
        id="social"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <Social />
        </div>
      </section> */}

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <div className="w-full">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;
