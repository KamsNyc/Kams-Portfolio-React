import React from "react";
import { Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { AiOutlineCloseCircle,  AiFillProfile } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full h-[60px] shadow-xl z-50 bg-white">
      <div className="flex items-center justify-between w-full h-full px-16 2xl:px-32">
        <img src="../src/assets/logo.png" alt="Kamel Logo" width="125px" />
        <div className="">
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <section className="md:hidden">
            <CgMenuRound size={35} />
          </section>
        </div>
      </div>

      <aside className="fixed left-0 top-0 w-full h-screen md:hidden bg-black/40 z-40">
        <section className="fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-white p-9 ease-in duration-500">
          <div className="">
            <section className="flex w-full items-center justify-between">
              <img src="../src/assets/logo.png" alt="Kamel" width="100px" />
              <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineCloseCircle size={30} />
              </div>
            </section>

            <section className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together.{" "}
              </p>
            </section>
          </div>

          <section className="py-4 flex flex-col" >
            <ul className="uppercase">
              <li className="py-4 text-sm">
                <Link to={"/home"}>Home</Link>
              </li>
              <li className="py-4 text-sm">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="py-4 text-sm">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="py-4 text-sm">
                <Link to={"/services"}>Services</Link>
              </li>
              <li className="py-4 text-sm">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>

            <section className="pt-40">
              <p className="uppercase tracking-widest text-black">Let's Connect</p>
              <div className="flex justify-between my-4">
                  <BiLogoLinkedinSquare size={35} />
                  <BiLogoGithub size= {35}/>
                  <MdMarkEmailUnread size= {35}/>
                  <AiFillProfile size= {35}/>
              </div>


            </section>
          </section>
        </section>
      </aside>
    </nav>
  );
};
