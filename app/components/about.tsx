import React from "react";

export default function About() {
  return (
    <section className="px-5 md:px-20 md:h-[400px] max-sm:mb-[80px]">
      <div className="pb-10">
        <h1 className="text-lg md:text-4xl font-orbitron font-semibold">
          About Me
        </h1>
        <div className="md:w-[600px] rounded-full md:h-[600px] bg-purple-600 blur-2xl -rotate-45 absolute -right-[400px] top-[400px] opacity-40 -z-10 max-sm:hidden"></div>

        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      </div>
      <p className="md:text-2xl font-inter">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eius
        molestias illum aut fugit quam quis dolorem cumque, fugiat, ipsum
        aliquid esse, eligendi autem nihil tempora quibusdam maiores eum enim.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum,
        sapiente eum nulla quidem autem possimus ex fuga repudiandae dolorem
        esse asperiores id deleniti ullam quo quisquam, nisi explicabo.
        Expedita.
      </p>
      <button className="button-hover px-8 py-3 rounded-sm font-orbitron font-semibold cursor-pointer uppercase mt-10">
        Connect with me
      </button>
    </section>
  );
}
