import React from "react";

export default function BasicInfo() {
  return (
    <div className="relative w-full bg-almond rounded-lg shadow-md pt-6 p-8">
      <h6 className="text-xl md:text-3xl font-bold leading-none mb-4 w-full pr-12">
        Basic Info
      </h6>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 w-full mb-6 text-base md:text-xl">
        <li className="w-full flex flex-col">
          <span className="font-bold">Yield</span>
          <span>8 Pancakes</span>
        </li>
        <li className="w-full flex flex-col">
          <span className="font-bold">Prep Time</span>
          <span>5 min.</span>
        </li>
        <li className="w-full flex flex-col">
          <span className="font-bold">Cook Time</span>
          <span>15 min.</span>
        </li>
        <li className="w-full flex flex-col">
          <span className="font-bold">Total Time</span>
          <span>20 min.</span>
        </li>
      </ul>
      <a className="pButton" href="#">
        {" "}
        Download Recipe{" "}
      </a>
    </div>
  );
}
