import React from "react";

export default function Ingredients() {
  return (
    <div className="w-full flex flex-col">
      <h6 className="text-xl md:text-3xl font-bold leading-none mb-4 w-full">
        Ingredients
      </h6>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 w-full text-sm md:text-lg list-disc pl-4 font-medium">
        <li>200 g flour</li>
        <li>100 g of sugar</li>
        <li>maple syrup (optional)</li>
        <li>5 eggs (egg yolk and egg white separated)</li>
        <li>4 tablespoons oil</li>
        <li>2 tablespoons cocoa</li>
        <li>1 sachet baking powder (10 g)</li>
        <li>1 pinch of salt</li>
        <li>1 cinnamon powder</li>
        <li>nuts / cashew / cranberry</li>
      </ul>
    </div>
  );
}
