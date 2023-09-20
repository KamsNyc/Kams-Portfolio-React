import React from "react";

function Skills() {
  return (
    <section id="skills" className="w-full pt-6 p-8">

      {/* FRONT END SKILLS */}

      <div className="max-w-[1248px] mx-auto flex flex-col justify-center">
      <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          Skills
        </p>
      <h3 className="py-4 text-[30px]">What I Can Do</h3>
        <p className="pt-8 text-xl tracking-widest uppercase text-[#FD8B49]">
          Fontend Skills
        </p>
        <div className=" pt-4 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Html.png"
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
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Css.png"
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
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Javascript.png"
                  alt="JavaScript Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/React.png"
                  alt="JavaScript Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/* Tailwind */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Tailwind.png"
                  alt="JavaScript Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

         {/* ADD NEW */}

        </div>

        {/* Backend */}
        <section className="w-full pt-12 p-2">
        <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          Backend Skills
        </p>
        <div className=" pt-4 grid md:grid-cols-3 lg:grid-cols-6 gap-4">

          {/* Nodejs */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Nodejs.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

          {/* Firebase */}

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Firebase.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          </div>
          </div>
          </section>

           {/* ETC Skills */}
        <section className="w-full pt-12 p-2">
        <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          More Skills
        </p>
        <div className=" pt-4 grid md:grid-cols-3 lg:grid-cols-6 gap-4">

          {/* Figma */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Figma.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>

          {/* Github */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Github.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          {/* Wordpress */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Wordpress.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Wordpress</h3>
              </div>
            </div>
          </div>

          {/* Wix */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Wix.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Wix</h3>
              </div>
            </div>
          </div>

          {/* Shopify */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="/../src/assets/Shopify.png"
                  alt="HTML5 Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Shopify</h3>
              </div>
            </div>
          </div>
          </div>
          </div>
          </section>

      </div>
    </section>

  );
}

export default Skills;
