import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <section className="z-40">
      <div className="px-5 md:px-20 h-[80px] flex justify-between items-center ">
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
