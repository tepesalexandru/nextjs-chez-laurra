import React from "react";

export default function Result() {
  return (
    <article className="w-full flex flex-col mb-24 lg:mb-32">
      <h6 className="text-xl md:text-3xl font-bold leading-none mb-6 w-full">
        Bon appetit!
      </h6>
      {/* Image Gallery */}
      <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Image */}
        <div className="w-full rect rounded-lg shadow-md overflow-hidden">
          <img
            className="sImg"
            src="./assets/images/le-buzz-jlNtfHi8oiI-unsplash.jpg"
            alt="food"
          />
        </div>
        {/* Image */}
        <div className="w-full rect rounded-lg shadow-md overflow-hidden">
          <img className="sImg" src="./assets/images/bg.jpg" alt="food" />
        </div>
      </article>
    </article>
  );
}
