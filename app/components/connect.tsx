import React from "react";
import SocialCard from "./social-card";
import Image from "next/image";

export default function Connect() {
  return (
    <section className="px-5 md:px-20 h-fit pb-20 font-inter">
      <h1 className="text-lg md:text-4xl font-orbitron font-semibold">
        Keep in touch
      </h1>
      <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      <p className="text-[16px] md:text-[30px] font-medium mt-5 text-center">
        Stay connected with me through my socials
      </p>
      <div className="flex flex-col justify-center items-center mt-10 gap-10">
        <SocialCard>
          <Image
            src="/x-logo.png"
            alt="x-logo"
            width={100}
            height={100}
            className="w-[40px] bg-white p-1 rounded-md"
          />
          <p>
            X(fka Twitter):{" "}
            <a href="https://x.com/cryptonautt_" className="text-slate-400">
              @cryptonautt_
            </a>
          </p>
        </SocialCard>

        <SocialCard>
          <Image
            src="/telegram.png"
            alt="telegram-logo"
            width={100}
            height={100}
            className="w-[40px] bg-white p-1 rounded-md"
          />
          <p>
            Telegram:{" "}
            <a href="https://t.me/OxCrypt0n" className="text-slate-400">
              @OxCrpt0n
            </a>
          </p>
        </SocialCard>

        <SocialCard>
          <Image
            src="/tiktok.svg"
            alt="tiktok-logo"
            width={100}
            height={100}
            className="w-[40px] bg-white p-1 rounded-md"
          />
          <p>
            TIktok:{" "}
            <a
              href="https://www.tiktok.com/@cryptonautt?_t=zm-8vbitnpa5q9&_r=1"
              className="text-slate-400"
            >
              @cryptonautt
            </a>
          </p>
        </SocialCard>
      </div>
    </section>
  );
}
