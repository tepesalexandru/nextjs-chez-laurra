import React from "react";
import BasicInfo from "../../../components/Recipe/BasicInfo";
import CommentForm from "../../../components/Recipe/CommentForm";
import Ingredients from "../../../components/Recipe/Ingredients";
import Introduction from "../../../components/Recipe/Introduction";
import Result from "../../../components/Recipe/Result";
import Share from "../../../components/Recipe/Share";
import Similar from "../../../components/Recipe/Similar";
import Steps from "../../../components/Recipe/Steps";
import Comment from "../../../components/Recipe/Comment";
import IGImage from "../../../components/Recipe/IGImage";
import Heading from "../../../components/Recipe/Heading";

export default function RecipePage() {
  return (
    <div className="bg-linen font-dLibre text-dBrown">
      <main className="w-full pb-24 lg:pb-32">
        <Introduction />
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col trigger">
            <div className="grid grid-cols-1 gap-12 pin">
              <BasicInfo />
              <Share />
            </div>
          </div>
          {/* Main */}
          <div className="lg:col-span-2 w-full grid grid-cols-1 gap-12">
            <Ingredients />
            <div className="w-full flex flex-col">
              <h6 className="text-xl md:text-3xl font-bold leading-none mb-6 w-full">
                Method of Preparation
              </h6>
              {/* Iframe Container */}
              <div className="w-full rounded-lg shadow-lg mb-8 overflow-hidden">
                <iframe
                  className="w-full object-cover"
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/FTkjBAaWk58"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <Steps />
            </div>
          </div>
        </section>
        {/* Showcase/Recipes/Comments */}
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 mb-24 lg:mb-32">
          <Result />
          <article className="w-full flex flex-col items-center mb-24 lg:mb-32">
            <Heading label="Similar Recipes" />
            <Similar />
          </article>
          {/* Comments */}
          <article className="w-full flex flex-col">
            <h6 className="text-xl md:text-3xl font-bold leading-none mb-6 w-full">
              Comments
            </h6>
            <CommentForm />
            {/* Dummy Comments */}
            <div className="grid grid-cols-1 gap-10">
              {/* Repeat Comment */}

              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </article>
        </section>
        {/* Instagram */}
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 flex flex-col items-center">
          <Heading label="Instagram" />
          {/* Image Gallery */}
          <article className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
            {/* Image */}
            <IGImage />
            <IGImage />
            <IGImage />
            <IGImage />
          </article>
        </section>
      </main>
    </div>
  );
}
