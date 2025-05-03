import React from "react";

export default function Skills() {
  return (
    <section className="px-5 md:px-20 md:h-[400px] max-sm:mb-[80px] flex flex-col md:flex-row justify-between">
      <div data-aos="fade-right">
        <h1 className="text-xl md:text-4xl font-orbitron font-semibold">
          Core Competencies
        </h1>

        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
        <ul className="mt-8 list-disc pl-5 md:pl-10 font-inter md:text-lg">
          <li>Marketing & Community Management</li>
          <li>Ambassadorship & KOL management</li>
          <li>Collaboration & Partnership Development</li>
          <li>Event Planning & Execution</li>
          <li>Community Moderation & Conflict Resolution</li>
          <li>Content Strategy & Social Media Management</li>
          <li>Analytics & Performance Tracking</li>
        </ul>
      </div>

      <div className="max-sm:mt-15"  data-aos="fade-left">
        <h1 className="text-xl md:text-4xl font-orbitron font-semibold">
          Tools and Platforms
        </h1>

        <div className="h-[2px] w-15 md:w-30 rounded-md mt-2 md:mt-4 bg-white"></div>
        <ul className="mt-8 list-disc pl-5 md:pl-10 font-inter md:text-lg">
          <li><span className="font-bold">Community Platforms:</span> Discord, Telegram, Reddit</li>
          <li><span className="font-bold">Social Media:</span> Twitter, Instagram, TikTokt</li>
          <li><span className="font-bold">Analytics:</span> Google Analytics, Hootsuite Insights</li>
          <li><span className="font-bold">Documentation:</span> Docs,Google sheet, Excel,Gitbook</li>
        </ul>
      </div>
    </section>
  );
}
