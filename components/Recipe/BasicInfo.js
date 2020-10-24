import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function BasicInfo(props) {
  let newIngredients = props.ingredients.split("\n");
  const renderIngredients = () => {
    return newIngredients.map((ig) => <li>{ig}</li>);
  };

  return (
    <div className="relative w-full bg-almond rounded-lg shadow-md pt-6 p-8">
      <h6 className="text-xl md:text-3xl font-bold leading-none mb-4 w-full pr-12">
        {props.title}
      </h6>
      <ul className="grid grid-cols-1 sm:grid-cols-1 gap-x-4 gap-y-2 w-full text-sm md:text-lg list-disc pl-4 font-medium mb-2">
        {renderIngredients()}
      </ul>
      {/*<ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 w-full mb-6 text-base md:text-xl">
          <li className="w-full flex flex-col">
            <span className="font-bold">Yield</span>
            <span>{this.props.yd}</span>
          </li>
          <li className="w-full flex flex-col">
            <span className="font-bold">Prep Time</span>
            <span>{this.props.prep}</span>
          </li>
          <li className="w-full flex flex-col">
            <span className="font-bold">Cook Time</span>
            <span>{this.props.cook}</span>
          </li>
          <li className="w-full flex flex-col">
            <span className="font-bold">Total Time</span>
            <span>{this.props.total}</span>
          </li>
        </ul>*/}
      {/*<a class="pButton" href="#" onClick={() => this.printDocument()}>
        {" "}
        Download Recipe{" "}
      </a>*/}
    </div>
  );
}
