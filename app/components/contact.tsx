"use client";
import React from "react";

export default function Contact() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
  };
  return (
    <section
      className="px-5 md:px-20 md:h-[calc(100vh-60px)] relative max-sm:py-20 z-20"
      id="message"
    >
      <div className="pb-10">
        <h1 className="text-lg md:text-4xl font-orbitron font-semibold">
          Shoot a Message
        </h1>
        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      </div>
      <div className="flex justify-center items-center mt-5 md:mt-10">
        <form
          className="w-[700px] flex flex-col gap-10 font-inter"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="Name" className="text-md md:text-xl font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className=" border-2 border-purple-900/70 px-3 py-3 md:py-4 rounded-md mt-3 shadow-md shadow-purple-800/50"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-md md:text-xl font-medium">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-2 border-purple-900/70 px-3 py-3 md:py-4 rounded-md mt-3 shadow-md shadow-purple-800/50"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-md md:text-xl font-medium">
              Message
            </label>
            <textarea
              rows={5}
              className="resize-none border-2 border-purple-900/70 px-3 py-3 md:py-4 rounded-md mt-3 shadow-md shadow-purple-800/50"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="button-hover w-full px-4 py-2 text-[16px] md:text-xl rounded-sm font-orbitron font-medium cursor-pointer uppercase hover:scale-105">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="w-[600px] rounded-full h-[400px] bg-purple-600 blur-2xl -rotate-45 absolute -left-[400px] bottom-[200px] opacity-40 -z-20"></div>
    </section>
  );
}
