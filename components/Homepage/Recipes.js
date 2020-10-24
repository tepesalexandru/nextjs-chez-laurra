import React from "react";
import RecipeCard from "./RecipeCard";
import Heading from "./Heading";
import {i18n} from '../../i18n';

function Recipes(props) {
  console.log(props);
  const getImage = (rec, idx) => {
    if (idx == 0) {
      if (rec.Cover.formats.medium.url !== undefined) {
        return rec.Cover.formats.medium.url;
      } else if (rec.Cover.formats.thumbnail.url !== undefined) {
        return rec.Cover.formats.thumbnail.url;
      }
    } else if (idx == 1) {
      if (rec.Result1.formats.medium.url !== undefined) {
        return rec.Result1.formats.medium.url;
      } else if (rec.Result1.formats.thumbnail.url !== undefined) {
        return rec.Result1.formats.thumbnail.url;
      }
    } else if (idx == 2) {
      if (rec.Result2.formats.medium.url !== undefined) {
        return rec.Result2.formats.medium.url;
      } else if (rec.Result2.formats.thumbnail.url !== undefined) {
        return rec.Result2.formats.thumbnail.url;
      }
    }
  }

  const getLabel = (rec) => {
    if (i18n.language === "ro") {
      return rec.Name;
    } else if (i18n.language === "fr") {
      return rec.Name_Fr;
    } else {
      return rec.Name_Eng;
    }
  }

  return (
    <section className="max-w-6xl w-full mx-auto px-6 md:px-12 flex flex-col items-center mb-24 lg:mb-32">
      <Heading title={props.title} />
      {/* Recipes */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {props.recipes.slice(0, 6).map((recipe) => (
          <RecipeCard label={getLabel(recipe)} category={recipe.navigation.slug} slug={recipe.Slug} image={getImage(recipe, 0)}/>
        ))}
      </div>
    </section>
  );
}
export default Recipes;
