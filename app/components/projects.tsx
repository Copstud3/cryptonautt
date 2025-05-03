import React from "react";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="px-5 md:px-20 h-fit max-sm:py-10 md:pb-15">
      <div className="pb-10 md:pb-20">
        <h1 className="text-xl md:text-4xl font-orbitron font-semibold">
          Projects
        </h1>
        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:justify-items-center">
        <div data-aos="fade-right">
          <ProjectCard
            title="Hairy the Bene"
            description="Dominating across the Milky Way, ensuring governance, wealth, and harmony for Ancient8 citizens. Advancing OP Superchain IP."
            img="/space3.png"
            plink="https://space3.gg/games/hairy-the-bene"
            xlink="https://x.com/BeneCatwiches?t=zu9h9pBga0lLPjgXcFw_qQ&s=09"
          />
        </div>

        <div data-aos="fade-up">
          <ProjectCard
            title="Codatta｜Powered by XnY"
            description="Codatta is a universal annotation and labeling platform that turns your intelligence into AI."
            img="/codatta.png"
            className="md:mt-30"
            plink="https://space3.gg/games/hairy-the-bene"
            xlink="https://x.com/codatta_io?t=LwQ-GScI8EdeQsMwao0Aog&s=09"
          />
        </div>

        <div data-aos="fade-left">
          <ProjectCard
            title="TTT"
            description="🔫PvP shooter Web 3.0 game offers GTA-style mobile adventure. 💪🏻Backed by Xterio, Animoca Ventures, and Arcane "
            img="/ttt-edit.jpg"
            plink="https://x.com/3T_shootergame?t=LUJf16Q84BAeufAJJQhNjg&s=09"
            xlink="https://x.com/3T_shootergame?t=LUJf16Q84BAeufAJJQhNjg&s=09"
          />
        </div>
      </div>
    </section>
  );
}
