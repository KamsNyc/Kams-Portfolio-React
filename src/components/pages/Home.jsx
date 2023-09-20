import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import AboutSection from "../AboutSection";
import ProjectSection from "../ProjectSection";
import ContactSection from "../ContactSection";


export const Home = () => {
  return (
    <section >
      <section className="hero">
        <Hero />
      </section>

      <section >
      <AboutSection />
      </section>

      <section>
        <Skills />
      </section>

      <section >
        <ProjectSection />
      </section>

      <section >
        <ContactSection />
      </section>

    </section>
  );
};
