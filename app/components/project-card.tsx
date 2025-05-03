import LinkSvg from "@/public/link-svg";
import XLogoSvg from "@/public/x-logo-svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  img: string;
  className?: string;
  xlink: string;
  plink: string;
}

export default function ProjectCard({
  title,
  description,
  img,
  className,
  xlink,
  plink, //project link
}: Props) {
  return (
    <div
  className={`${className} h-fit bg-[#1e232d]/30 border border-slate-700 rounded-md flex flex-col hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer font-inter`}
>
  <div className="bg-black w-full h-[30px] md:h-[30px] flex items-center gap-2 pl-3 rounded-t-md">
    <div className="w-3 md:w-[9px] md:h-[9px] h-3 rounded-full bg-red-600"></div>
    <div className="w-3 md:w-[9px] md:h-[9px] h-3 rounded-full bg-green-600"></div>
    <div className="w-3 md:w-[9px] md:h-[9px] h-3 rounded-full bg-yellow-600"></div>
  </div>
  <Image
    src={img}
    alt="image"
    width={300}
    height={300}
    className="w-full"
  />
  <div className="py-5 md:py-4 md:px-4 px-5 flex flex-col flex-grow">
    <div className="flex justify-between items-center">
      <p className="text-xl font-orbitron font-semibold">{title}</p>
      <Link href={xlink} target="_blank"><XLogoSvg className="bg-white py-1 px-[6px] rounded-sm"/></Link>
    </div>
    <p className="mt-5">{description}</p>
    <div className="mt-auto pt-3">
      <Link href={plink} target="_blank"><button className="flex gap-1 items-center border border-slate-500 rounded-md px-3 py-2 text-sm cursor-pointer group">View Project<LinkSvg className="group-hover:stroke-purple-500" /></button></Link>
    </div>
  </div>
</div>
  );
}
