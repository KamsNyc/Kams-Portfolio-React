import React from 'react'

function AboutSection() {
  return (
    <section id="about" className="w-full md:h-screen p-2 flex py-12 items-center">
  <div className="max-w-[1248px] m-auto md:grid grid-cols-3 gap-8">
    <div className="col-span-2">
      <p className="uppercase text-xl tracking-widest text-[#FD8B49]">About</p>
      <h2 className="py-4">Who I Am</h2>
      <p>// I am not your normal developer</p>
      <p className="xl:pr-20 py-4">
        I'm Kamel, also recognized as @KamsNyc. I specialize in crafting UI
        designs on Figma and developing full-stack websites. Currently enhancing
        my web development skills through the #100devs course and daily Codewars
        challenges.
      </p>

      <p className="xl:pr-20 py-4">
        Seeking collaboration on web projects, UI/UX design, and tech
        opportunities. Based in Queens, NYC, I'm an active basketball player on
        weekends and thrive on creative pursuits beyond my roles in e-commerce
        and eBay.
      </p>
      <p className="py-2 underline cursor-pointer">
        Check out some of my latest projects
      </p>
    </div>
    <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <img
        className="rounded-xl"
        src="https://source.unsplash.com/1600x500/?abstract"
        alt="test"
      />
    </div>
  </div>
</section>
  )
}

export default AboutSection