import React from "react";
import { AiOutlineCloseCircle, AiFillProfile } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";

function Hero() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto flex justify-center items-center">
        <div className="">
          <div className=" lg:bg-[#f7f7f7] rounded-2xl p-4">
            <p className="uppercase text-sm p-2 text-black font-medium tracking-widest">
              Designing, Developing, Improving! Everyday
            </p>
            <h1 className=" text-gray-700 lg:py-4 py-2">
              Hi, I'm <span className="text-[#fd8b49] ">Kamel</span>
            </h1>
            <h1 className="pt-2 pb-2 text-gray-700 md:font-lg">A Full-Stack Web Developer</h1>
            <p className="pt-4 pb-2 max-w-[95%] sm:max-w-[80%] lg:w-full m-auto">
              I'm Kamel, also recognized as @KamsNyc. I specialize in crafting UI designs on Figma and developing full-stack websites. Currently enhancing my web development skills through the #100devs course and daily Codewars challenges. Seeking collaboration on web projects, UI/UX design, and tech opportunities. Based in Queens, NYC, I'm an active basketball player on weekends and thrive on creative pursuits beyond my roles in e-commerce and eBay.
            </p>

            <section className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <BiLogoGithub size={25} />
                </div>

                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <BiLogoLinkedinSquare size={25} />
                </div>

                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <MdMarkEmailUnread size={25} />
                </div>

                <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <AiFillProfile size={25} />
                </div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
