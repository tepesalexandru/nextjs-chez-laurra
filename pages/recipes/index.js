import React, { useState } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import CardResult from "../../components/Search/Card";
import HeaderResult from "../../components/Search/Header";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import {withTranslation} from '../../i18n';

function Recipes(props) {
  const myRouter = useRouter();
  const urlPaths = myRouter.asPath.split("=");
  let searchTerm = urlPaths[urlPaths.length - 1];
  searchTerm = searchTerm.replace(/%20/g, " ");
  if (searchTerm === "/recipes") searchTerm = "";
  const [term, setTerm] = useState(searchTerm || "");

  const categories = [
    "Bucatarie Internationala",
    "Bucatarie Franceza",
    "Brutarie",
    "Desert",
  ];
  const eachRecipe = [[], [], [], []];

  const resultedRecipes = props.recipes.filter((recipe) =>
    recipe.Name.includes(searchTerm)
  );

  resultedRecipes.map((rec) => {
    for (let i = 0; i < 4; i++) {
      if (rec.navigation.title === categories[i]) {
        eachRecipe[i].push(rec);
      }
    }
  });

  const SEO = {
    title: 'Chezz Laura | Retete',
    description: 'Toate retetele'
  }
  const navigation = [];
  for (let i = 0; i < 4; i++) {
    navigation.push({
      label: props.t(`navigations.nav-${i}`),
      slug: props.t(`navigations.slug-${i}`)
    })
  }
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

  return (
    <>
      <NextSeo {...SEO} />
      <Header navigation={navigation}/>
      <div className="bg-white font-dLibre text-dBrown">
        <header
          className="relative w-full bg-center bg-no-repeat bg-cover pt-32 pb-48 px-6 mb-6 z-0"
          style={{ backgroundImage: "url(./assets/images/bg.jpg)" }}
        >
          <form className="relative max-w-3xl w-full mx-auto" action>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full fStyle py-3 pl-6 pr-24 shadow-md rounded-full bg-linen"
              type="search"
              name="search"
              id="search"
              placeholder="Search for recipes"
              autoComplete="off"
            />
            <div className="absolute top-0 right-0 h-full py-1 pr-1">
              <input
                className="pButton cursor-pointer"
                type="submit"
                defaultValue="Search"
              />
            </div>
          </form>
          {/* Blur Effect */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-linen pointer-events-none z-0" />
        </header>

        <main className="w-full">
          {/* Recipes */}
          {eachRecipe.map((recList, idx) => {
            if (recList.length > 0) {
              return (
                <section
                  key={`idx-${idx}`}
                  className="max-w-screen-xl w-full mx-auto px-6 md:px-12 flex flex-col items-center mb-24 lg:mb-32"
                >
                  <HeaderResult title={props.t(`navigations.nav-${idx}`)} />
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {recList.map((rec) => (
                      <CardResult
                        key={rec.Slug}
                        title={rec.Name}
                        image={getImage(rec, 0)}
                        category={rec.navigation.slug}
                        slug={rec.Slug}
                      />
                    ))}
                  </div>
                </section>
              );
            }
          })}
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/recipes`);
  const data = await res.json();
  console.log("ddd", data);
  return {
    props: {
      recipes: data,
    },
  };
}

export default withTranslation('common')(Recipes);