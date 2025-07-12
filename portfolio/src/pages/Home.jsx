import React from "react";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";   
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
    </>
  );
};

export default Home;
