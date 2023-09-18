import React from 'react'

function Skills() {
  return (
    <section className=" max-w-[1024px] lg:h-screen p-2">
      <div className=" max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg-grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://img.icons8.com/color/48/000000/html-5.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://img.icons8.com/color/48/000000/html-5.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://img.icons8.com/color/48/000000/html-5.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Skills
