import React from "react";

export default function Ingredients(props) {

  let ingredients = props.content.split("\n");

  return (
    <div className="w-full flex flex-col">
      <h6 className="text-xl md:text-3xl font-bold leading-none mb-4 w-full">
        Ingredients
      </h6>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 w-full text-sm md:text-lg list-disc pl-4 font-medium">
        {ingredients.map(ig => (
          <li>{ig}</li>
        ))}
      </ul>
    </div>
  );
}
