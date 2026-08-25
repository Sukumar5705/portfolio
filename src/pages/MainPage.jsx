import React from "react";
import Home from "./home";
import Project from "./ProjectPage";
import Education from "./Education";
import Contact from "./contact";

const MainPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainPage;
