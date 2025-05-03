"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

// const words = [
//   { text: "Web3 Growth strategist" },
//   { text: "Web3 Project Ambassador" },
//   { text: "Content Creator" },
// ];

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease", // Easing function
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <section className="md:h-[calc(100vh-60px)] flex max-sm:justify-center items-center max-sm:pb-10">
      <div className="w-[600px] rounded-full h-[600px] bg-purple-600 blur-2xl -rotate-45 absolute -left-[400px] md:-left-[300px] top-5 opacity-40 -z-20"></div>
      <Image
        src="/honeycomb.svg"
        alt="honeycomb"
        width={200}
        height={200}
        className="absolute -left-30 -top-10 w-[500px] opacity-30 -z-10"
      />
      <div className="px-5 md:px-20 z-20 max-sm:flex-col max-sm:justify-center flex items-center md:gap-20 gap-5 max-sm:py-20">
        <Image
          src="/cryptonaut-img.jpg"
          alt="cryptonautt"
          width={300}
          height={300}
          className="rounded-full border-2 border-purple-800 shadow-lg shadow-purple-800/50 hover:scale-110 transition-all duration-300 md:w-[300px] xl:w-[400px] w-[200px]"
          data-aos="zoom-in-right"
        />
        <div className="flex flex-col items-center">
          <h2
            className="font-orbitron font-semibold text-[30px] lg:text-[60px] xl:text-[90px]"
            data-aos="zoom-in-up"
          >
            I&apos;m Cryptonautt
          </h2>
          <div className="relative h-10 overflow-hidden" data-aos="zoom-in-up">
            <div className="word-slider animate-slide flex flex-col">
              <span className="h-10 flex items-center justify-center text-[18px] md:text-4xl font-orbitron font-semibold py-0">
                Project Ambassador
              </span>
              <span className="h-10 flex items-center justify-center text-[18px] md:text-4xl font-orbitron font-semibold py-[25px]">
                Project Growth strategist
              </span>
              <span className="h-10 flex items-center justify-center text-[18px] md:text-4xl font-orbitron font-semibold py-[25px]">
                Content Creator
              </span>
              <span className="h-10 flex items-center justify-center text-[18px] md:text-4xl font-orbitron font-semibold py-0">
                Community manager
              </span>
            </div>
          </div>
          <Link href="https://docs.google.com/document/d/16fO9JhxBC_A1fH5ldVAjJKIX7C09oVBkInPVbadL6c4/edit?usp=sharing" target="_blank">
            <button
              data-aos="fade-down"
              className="button-hover px-4 py-3 md:px-8 md:py-3 rounded-sm font-orbitron font-semibold cursor-pointer uppercase hover:scale-105 mt-10 md:text-[22px]"
            >
              My Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
