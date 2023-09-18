import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import AboutSection from "../AboutSection";

export const Home = () => {
  return (
    <section id="home">
      <section className="hero">
        <Hero />
      </section>

      <section id="about">
      <AboutSection />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </section>
  );
};
