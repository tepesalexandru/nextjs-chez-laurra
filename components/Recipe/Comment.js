import React from "react";

export default function UserComment() {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      {/* Avatar/Name/Email*/}
      <div className="w-full flex items-center mb-2">
        {/* Avatar */}
        <div className="p-2 rounded-full bg-almond mr-2">
          <svg
            className="w-6 h-6 text-dBrown"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* Name/Email */}
        <div className="flex-1 flex flex-col items-start justify-around">
          <h6 className="text-base font-medium w-full truncate">
            Tepes Paulo George Alexandru
          </h6>
          <p className="text-sm -mt-px">26th June, 2020</p>
        </div>
      </div>
      {/* Comment */}
      <p className="w-full font-medium pl-1">
        Recipe was good, I ate too much, now I'm FAT wadu hek.
      </p>
    </div>
  );
}
