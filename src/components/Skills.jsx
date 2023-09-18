import React from "react";

function Skills() {
  return (
    <section className="w-full lg:h-screen p-2">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/html.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/css.png"
                  alt="CSS Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/javascript.png"
                  alt="JavaScript Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          {/* Node.js */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/NodeJs.png"
                  alt="Node.js Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

          {/* Figma */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Figma.png"
                  alt="Figma Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>

          {/* Python */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Python.png"
                  alt="Python Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          {/* Lightroom */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Lightroom.png"
                  alt="Lightroom Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Lightroom</h3>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/React.png"
                  alt="React Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/* VS Code */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/VsCode.png"
                  alt="VS Code Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>VS Code</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
