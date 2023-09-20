import React from "react";
import propImg from '../assets/myProject/project2.png';
import { Link } from 'react-router-dom';

  function ProjectItem({title, backgroundImg, projectUrl}) {
  return (
    <aside className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-2 group hover:bg-black">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="Project 1"
      />

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-white text-2xl tracking-wider text-center">
          {title}
        </h3>
        <p className="text-white pb-4 pt-2 text-center">React Js</p>
        <Link to={projectUrl}>
          <p className="text-center text-lg py-2 rounded-lg bg-[#FD8B49] text-white font-bold">
            View Project
          </p>
        </Link>
      </div>
    </aside>
  );
}

export default ProjectItem;
