import Image from "next/image";
import React from "react";

// const words = [
//   { text: "Web3 Growth strategist" },
//   { text: "Web3 Project Ambassador" },
//   { text: "Content Creator" },
// ];

export default function Hero() {
  return (
    <section className="md:h-[calc(100vh-60px)] flex max-sm:justify-center items-center max-sm:pb-10">
      <div className="w-[600px] rounded-full h-[600px] bg-purple-600 blur-2xl -rotate-45 absolute -left-[400px] md:-left-[300px] top-5 opacity-40 -z-10"></div>
      <Image
        src="/honeycomb.svg"
        alt="honeycomb"
        width={200}
        height={200}
        className="absolute -left-30 -top-10 w-[500px] opacity-30"
      />
      <div className="px-5 md:px-20 z-20 max-sm:flex-col max-sm:justify-center flex items-center md:gap-20 gap-5 max-sm:py-20">
        <Image
          src="/cryptonaut-img.jpg"
          alt="cryptonautt"
          width={300}
          height={300}
          className="rounded-full border-2 border-purple-800 shadow-lg shadow-purple-800/50 hover:scale-110 transition-all duration-300 md:w-[400px] w-[100px]"
        />
        <div className="flex flex-col items-center">
          <h2 className="font-orbitron font-semibold text-[30px] md:text-[100px]">
            I&apos;m Cryptonautt
          </h2>
          <div className="relative h-10 overflow-hidden">
            <div className="word-slider animate-slide flex flex-col">
              <span className="h-10 flex items-center justify-center text-[18px] md:text-4xl font-orbitron font-semibold">
              Web3 Growth strategist
              </span>
              <span className="h-10 flex items-center justify-center text-[18px] md:text-4xl font-orbitron py-[25px] font-semibold">
              Web3 Project Ambassador
              </span>
              <span className="h-10 flex items-center justify-center text-[18px] md:text-4xl font-orbitron font-semibold">
              Content Creator
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
