import React from "react";

export default function Steps(props) {
  let steps = props.content.split("\n");
  return (
    <div>

    
    <ul id="divToPrint" className="grid grid-cols-1 gap-x-4 gap-y-2 w-full text-sm md:text-lg list-decimal pl-6 font-medium">
      {steps.map(step => (
        <li>{step}</li>
      ))}
    </ul>
    </div>
  );
}
