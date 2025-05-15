"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Change state when scroll position is greater than 10px
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <section className="z-40 sticky top-0">
      <div 
        className={`transition-all duration-300 px-5 md:px-20 h-[60px] md:h-[80px] flex justify-between items-center ${
          scrolled ? "backdrop-blur-md bg-purple-400/20 shadow-md" : ""
        }`}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={300}
            className="w-[200px] md:w-[300px]"
          />
        </Link>
        <button className="button-hover md:px-4 md:py-2 rounded-sm font-orbitron font-semibold cursor-pointer uppercase hover:scale-105 max-sm:hidden">
          <a href="#message">Let&apos;s connect</a>
        </button>
      </div>
    </section>
  );
}