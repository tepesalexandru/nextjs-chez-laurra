import React from "react";
import RecipeCard from "./RecipeCard";
import Heading from "./Heading";

function Recipes(props) {
  console.log(props);
  return (
    <section className="max-w-6xl w-full mx-auto px-6 md:px-12 flex flex-col items-center mb-24 lg:mb-32">
      <Heading title="Our Favorite Recipes" />
      {/* Recipes */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {props.recipes.map((recipe) => (
          <RecipeCard label={recipe.title} genre={recipe.categories[0].slug} slug={recipe.slug}/>
        ))}
      </div>
    </section>
  );
}
export default Recipes;
