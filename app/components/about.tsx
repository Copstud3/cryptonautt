import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section
      className="px-5 md:px-20 max-sm:-mt-10 md:h-[400px] max-sm:mb-[80px]"
      data-aos="fade-down"
    >
      <div className="pb-10">
        <h1 className="text-xl md:text-4xl font-orbitron font-semibold">
          About Me
        </h1>
        <div className="md:w-[600px] rounded-full md:h-[600px] bg-purple-600 blur-2xl -rotate-45 absolute -right-[400px] top-[400px] opacity-40 -z-10 max-sm:hidden"></div>

        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      </div>
      <p className="md:text-2xl font-inter">
        Hey there! I&apos;m an experienced strategist with over two years of
        expertise in community growth, marketing, social media management,
        partnership management, event planning, and moderation. I have a strong
        background in recruiting and managing ambassadors, creating engagement
        strategies, and driving brand loyalty.
      </p>
      <Link href="/#message">
        <button className="button-hover px-8 py-3 rounded-sm font-orbitron font-semibold cursor-pointer uppercase mt-10">
          Connect with me
        </button>
      </Link>
    </section>
  );
}
