import React from "react";

// Define arrays of skill objects for each category
const frontendSkills = [
  { id: 1, name: "HTML", imageSrc: "/../src/assets/Html.png" },
  { id: 2, name: "CSS", imageSrc: "/../src/assets/Css.png" },
  { id: 3, name: "JavaScript", imageSrc: "/../src/assets/Javascript.png" },
  { id: 4, name: "React", imageSrc: "/../src/assets/React.png" },
  { id: 5, name: "Tailwind", imageSrc: "/../src/assets/Tailwind.png" },
];

const backendSkills = [
  { id: 6, name: "Node.js", imageSrc: "/../src/assets/Nodejs.png" },
  { id: 7, name: "Firebase", imageSrc: "/../src/assets/Firebase.png" },
];

const otherSkills = [
  { id: 8, name: "Figma", imageSrc: "/../src/assets/Figma.png" },
  { id: 9, name: "Github", imageSrc: "/../src/assets/Github.png" },
  { id: 10, name: "Wordpress", imageSrc: "/../src/assets/Wordpress.png" },
  { id: 11, name: "Wix", imageSrc: "/../src/assets/Wix.png" },
  { id: 12, name: "Shopify", imageSrc: "/../src/assets/Shopify.png" },
];

function Skills() {
  return (
    <section className="w-full pt-6 p-2">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        {/* Frontend Skills */}
        <p className="pt-8 text-xl tracking-widest uppercase text-[#FD8B49]">
          Frontend Skills
        </p>
        <div className="pt-4 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {frontendSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 shadow-xl rounded-xl transform hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src={skill.imageSrc}
                    alt={`${skill.name} Icon`}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend Skills */}
        <p className="pt-8 text-xl tracking-widest uppercase text-[#FD8B49]">
          Backend Skills
        </p>
        <div className="pt-4 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {backendSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 shadow-xl rounded-xl transform hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src={skill.imageSrc}
                    alt={`${skill.name} Icon`}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <p className="pt-8 text-xl tracking-widest uppercase text-[#FD8B49]">
          Other Skills
        </p>
        <div className="pt-4 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 shadow-xl rounded-xl transform hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src={skill.imageSrc}
                    alt={`${skill.name} Icon`}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
