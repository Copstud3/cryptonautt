import React from "react";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="px-5 md:px-20 md:h-[calc(100vh-60px)] max-sm:py-20">
      <div className="pb-10">
        <h1 className="text-lg md:text-4xl font-orbitron font-semibold">
          Projects
        </h1>
        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:justify-items-center">
        <ProjectCard title="Project 1" description="Project 1 description" />
        <ProjectCard title="Project 1" description="Project 1 description" />
        <ProjectCard title="Project 1" description="Project 1 description" />
      </div>
    </section>
  );
}
