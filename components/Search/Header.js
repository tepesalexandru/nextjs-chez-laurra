import React from "react";

export default function HeaderResult(props) {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-none mb-3 z-10">
        {props.title}
      </h1>
      {/* Decoration */}
      <div className="max-w-xs w-full mx-auto px-12 flex justify-around mb-12 z-10">
        <div className="h-1 w-1 bg-dBrown rounded-full" />
        <div className="h-1 w-3 bg-dBrown rounded-full ml-2" />
        <div className="h-1 flex-1 bg-dBrown rounded-full mx-2" />
        <div className="h-1 w-3 bg-dBrown rounded-full mr-2" />
        <div className="h-1 w-1 bg-dBrown rounded-full" />
      </div>
    </>
  );
}
