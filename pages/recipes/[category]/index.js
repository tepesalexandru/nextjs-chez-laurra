import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { NextSeo } from "next-seo";

function CategoryPage(props) {
  const router = useRouter();

  const renderRecipes = () => {
    return props.recipes.map((recipe) => {
      return (
        <div className="flex flex-col items-center">
          <div className="sImgBox">
            <img
              className="sImg"
              src={`http://localhost:1337${recipe.Cover.formats.medium.url}`}
              alt="food"
            />
          </div>
          {/* Name */}
          <Link
            href="/recipes/[category]/[slug]"
            as={`/recipes/${props.slug}/${recipe.Slug}`}
          >
            <a className="cardLink">
              <h3 className="flex-1 truncate">{recipe.Name}</h3>
              <svg
                className="h-5 w-5 ml-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V14M14 4H20M20 4V10M20 4L10 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Link>
        </div>
      );
    });
  };

  const SEO = {
    title: `Chezz Laura | ${props.headerTitle}`,
    description: `${props.headerTitle}`
  }

  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-linen font-dLibre text-dBrown">
        <header
          className="relative w-full bg-center bg-no-repeat bg-cover py-32 lg:py-56 px-6 mb-12 z-0"
          style={{
            backgroundImage:
              "url(../assets/images/rachel-park-hrlvr2ZlUNk-unsplash.jpg)",
          }}
        >
          {/* Blur Effect */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-linen pointer-events-none z-0" />
        </header>
        <main className="w-full">
          <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 mb-24 lg:mb-32">
            {/* Name */}
            <h1 className="text-3xl md:text-5xl font-bold text-center leading-none mb-3 z-10">
              {props.headerTitle}
            </h1>
            {/* Decoration */}
            <div className="max-w-xs md:w-full mx-auto px-12 flex justify-around z-10 mb-12">
              <div className="h-1 w-1 bg-dBrown rounded-full" />
              <div className="h-1 w-3 bg-dBrown rounded-full ml-2" />
              <div className="h-1 flex-1 bg-dBrown rounded-full mx-2" />
              <div className="h-1 w-3 bg-dBrown rounded-full mr-2" />
              <div className="h-1 w-1 bg-dBrown rounded-full" />
            </div>
            {/* Recipes */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {renderRecipes()}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/navigations?slug=${query.category}`);
  const recipesRes = await fetch(
    `${API_URL}/recipes?navigation.slug=${query.category}`
  );
  const recipesData = await recipesRes.json();
  const data = await res.json();

  // cover image
  return {
    props: {
      headerTitle: data[0].title,
      slug: data[0].slug,
      recipes: recipesData,
    },
  };
}

export default CategoryPage;
