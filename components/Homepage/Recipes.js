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
        {props.recipes.slice(0, 6).map((recipe) => (
          <RecipeCard label={recipe.Name} category={recipe.navigation.slug} slug={recipe.Slug} image={recipe.Cover.formats.medium.url}/>
        ))}
      </div>
    </section>
  );
}
export default Recipes;
