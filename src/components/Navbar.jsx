import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { AiOutlineCloseCircle, AiFillProfile } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${
        navOpen ? "bg-white" : "bg-white shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between w-full h-[60px] px-8 2xl:px-32">
        <Link to={"/"}>
          <img src="../src/assets/logo.png" alt="Kamel Logo" width="115px" />
        </Link>
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
          <section onClick={toggleNav} className="md:hidden">
            <CgMenuRound className="cursor-pointer hover:scale-110 ease-in duration-200" size={35} />
          </section>
        </div>
      </div>

      <aside
        className={
          navOpen
            ? "fixed top-0 left-0 w-full h-screen md:hidden bg-black/60"
            : ""
        }
      >
        <section
          className={
            navOpen
              ? " rounded-md fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-white p-9 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-9 ease-in duration-500"
          }
        >
          <div className="">
            <section className="flex w-full items-center justify-between">
              <Link to={"/"}>
                <img
                  src="../src/assets/logo.png"
                  alt="Kamel Logo"
                  width="100px"
                />
              </Link>
              <div
                onClick={toggleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineCloseCircle size={30} />
              </div>
            </section>

            <section className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4"> Let's build together.</p>
            </section>
          </div>

          <section className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="py-4 text-sm">
                <Link to={"/"}>Home</Link>
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

            <section className="pt-20 h-full">
              <p className="uppercase tracking-widest text-black">
                Let's Connect
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[70%] ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BiLogoLinkedinSquare size={20} />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BiLogoGithub size={20} />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <MdMarkEmailUnread size={20} />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillProfile size={20} />
                </div>
              </div>
            </section>
          </section>
        </section>
      </aside>
    </nav>
  );
};
