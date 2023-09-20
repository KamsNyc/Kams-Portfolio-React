import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { AiFillProfile } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section id="contact" className="w-full lg:h-screen p-8">
      <div className="max-w-[1248px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#FD8B49]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-2">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
                  src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>

              <div className="p-4">
                <h2 className="py-4">Kamel Singh</h2>
                <p>Fullstack Developer</p>
                <p className="py-2">
                  Open to web, UI/UX, and exciting tech collaborations
                </p>
              </div>

              <div className="p-4">
                <p className="uppercase pt-8">Connect With Me</p>

                <div className="flex items-center justify-between py-4">
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
              </div>
            </div>
          </div>

          {/* right */}
          <div className=" col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="w-full py-2 px-4 border-[1px] flex border-gray-400 rounded-lg"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full py-2 px-4 border-[1px] border-gray-400 rounded-lg"
                      flex
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <section className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>

                  <input
                    type="email"
                    className="w-full py-2 px-4 border-[1px] border-gray-400 rounded-lg"
                    flex
                    placeholder="Enter your email"
                  />
                </section>

                <section className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>

                  <input
                    type="text"
                    className="w-full py-2 px-4 border-[1px] border-gray-400 rounded-lg"
                    flex
                    placeholder="Subject"
                  />
                </section>

                <section className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>

                  <textarea
                    className="p-3 border-[1px] border-gray-400 rounded-lg "
                    rows="10"
                  ></textarea>
                </section>

                <button className="w-full p-4 mt-6">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
