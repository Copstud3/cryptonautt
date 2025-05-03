"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import SocialCard from "./social-card";
import Image from "next/image";
import Link from "next/link";

export default function Connect() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease", // Easing function
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <section
      className="px-5 md:px-20 h-fit pb-20 font-inter pt-10"
      
    >
      <div data-aos='fade-right'>
      <h1 className="text-xl md:text-4xl font-orbitron font-semibold">
        Keep in touch
      </h1>
      <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      
      <p className="text-[16px] md:text-[30px] font-medium mt-10 text-center">
        Stay connected with me through my socials
      </p>
      </div>
      <div
        className="flex flex-col justify-center items-center mt-10 gap-10"
        data-aos='fade-up'
      >
        <Link href="https://x.com/cryptonautt_" target="_blank">
          <SocialCard>
            <Image
              src="/x-logo.png"
              alt="x-logo"
              width={100}
              height={100}
              className="w-[40px] bg-white p-1 rounded-md"
            />
            <p>
              X/Twitter{" "}
              <p className="text-slate-400 hover:text-purple-400">
                @cryptonautt_
              </p>
            </p>
          </SocialCard>
        </Link>

        <Link href="https://t.me/OxCrypt0n" target="_blank">
          <SocialCard>
            <Image
              src="/telegram.png"
              alt="telegram-logo"
              width={100}
              height={100}
              className="w-[40px] bg-white p-1 rounded-md"
            />
            <p>
              Telegram{" "}
              <p className="text-slate-400 hover:text-purple-400">@OxCrpt0n</p>
            </p>
          </SocialCard>
        </Link>

        <Link
          href="https://www.tiktok.com/@cryptonautt?_t=zm-8vbitnpa5q9&_r=1"
          target="_blank"
        >
          <SocialCard>
            <Image
              src="/tiktok.svg"
              alt="tiktok-logo"
              width={100}
              height={100}
              className="w-[40px] bg-white p-1 rounded-md"
            />
            <p>
              TIktok{" "}
              <p className="text-slate-400 hover:text-purple-400">
                @cryptonautt
              </p>
            </p>
          </SocialCard>
        </Link>
      </div>
    </section>
  );
}
