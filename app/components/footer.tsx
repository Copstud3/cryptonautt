import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="mx-5 md:mx-20 h-[100px] font-inter">
      <div>
        <div className="bg-white h-1 mb-5"></div>
        <div className="flex max-sm:flex-col items-center md:justify-between">
          <p className="max-sm:text-[15px]">
            &copy; {year} Cryptonautt - Built by{" "}
            <a href="https://x.com/copstud3" className="text-purple-400">
              Chris
            </a>
          </p>
          {/* <div className="flex gap-4"> */}
          <p className="max-sm:text-[15px]">We keep building!</p>
          {/* <p className="max-sm:text-[15px]">Date: {date.toDateString()}</p> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
