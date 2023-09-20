import React from "react";
import ProjectItem from "./ProjectItem";
import propImg from '../assets/myProject/project2.png';

function ProjectSection() {
  return (
    <section id="projects"className="w-full p-8">
      <div className="max-w-[1248px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <section className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio Project"
            backgroundImg='https://source.unsplash.com/1600x900/?weather'
            projectUrl="/mywork/portfolio"
          />

          <ProjectItem
            title="Olipop"
            backgroundImg='https://source.unsplash.com/1600x900/?weather'
            projectUrl="/mywork/portfolio"
          />

          <ProjectItem
            title="Portfolio Project"
            backgroundImg='https://source.unsplash.com/1600x900/?weather'
            projectUrl="/mywork/portfolio"
          />

          <ProjectItem
            title="Portfolio Project"
            backgroundImg='https://source.unsplash.com/1600x900/?weather'
            projectUrl="/mywork/portfolio"
          />
        </section>
      </div>
    </section>
  );
}

export default ProjectSection;
