import React from "react";

export default function Introduction({title, desc}) {
  return (
    <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 mb-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-none mb-3 z-10">
        {title}
      </h1>
      {/* Decoration */}
      <div className="max-w-xs md:w-full mx-auto px-12 flex justify-around z-10 mb-6">
        <div className="h-1 w-1 bg-dBrown rounded-full" />
        <div className="h-1 w-3 bg-dBrown rounded-full ml-2" />
        <div className="h-1 flex-1 bg-dBrown rounded-full mx-2" />
        <div className="h-1 w-3 bg-dBrown rounded-full mr-2" />
        <div className="h-1 w-1 bg-dBrown rounded-full" />
      </div>
      {/* Info */}
      <p className="font-medium max-w-4xl w-full mx-auto text-center text-sm md:text-lg">
        {desc}
      </p>
    </section>
  );
}
