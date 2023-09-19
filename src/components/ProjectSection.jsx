import React from 'react';
import propImg from '../assets/myProject/project2.png';
import { Link } from 'react-router-dom';

function ProjectSection() {
  return (
    <section className='w-full p-8'>
      <div className="max-w-[1240px] mx-auto px-4 py-32">
        <p className='text-xl tracking-widest uppercase text-[#FD8B49]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="relative flex items-center justify-center h-auto w-full mt-16 shadow-lg shadow-gray-400 rounded-xl group hover:bg-[#000] ease-in duration-300 hover:scale-105 ">
            <img className='rounded-xl group-hover:opacity-30 cursor-pointer' src={propImg} alt="" />

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className=' text-2xl text-[32px] text-white tracking-wider text-center'>Title:</h3>
              <p className='text-white pb-8 pt-4 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, voluptatibus? Provident laboriosam cum et vero quasi! Eos, labore quaerat? Perferendis incidunt blanditiis tempore veritatis. Error doloribus quasi maxime cum quam.</p>
              <Link to={'/'}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

          {/* Second Project */}
          <div className="relative flex items-center justify-center h-auto w-full mt-16 shadow-lg shadow-gray-400 rounded-xl group hover:bg-[#000] ease-in duration-300 hover:scale-105 ">
            <img className='rounded-xl group-hover:opacity-30 cursor-pointer' src={propImg} alt="" />

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className=' text-2xl text-[32px] text-white tracking-wider text-center'>Title:</h3>
              <p className='text-white pb-8 pt-4 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, voluptatibus? Provident laboriosam cum et vero quasi! Eos, labore quaerat? Perferendis incidunt blanditiis tempore veritatis. Error doloribus quasi maxime cum quam.</p>
              <Link to={'/'}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;