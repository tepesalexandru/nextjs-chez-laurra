import React, {useState} from "react";
import {NextSeo} from 'next-seo';
import BasicInfo from "../../../../components/Recipe/BasicInfo";
import CommentForm from "../../../../components/Recipe/CommentForm";
import Ingredients from "../../../../components/Recipe/Ingredients";
import Introduction from "../../../../components/Recipe/Introduction";
import Result from "../../../../components/Recipe/Result";
import Share from "../../../../components/Recipe/Share";
import Similar from "../../../../components/Recipe/Similar";
import Steps from "../../../../components/Recipe/Steps";
import Comment from "../../../../components/Recipe/Comment";
import IGImage from "../../../../components/Recipe/IGImage";
import Heading from "../../../../components/Recipe/Heading";
import Header from "../../../../components/Header";
import {withTranslation} from '../../../../i18n'

function RecipePage(props) {
  const [recipeRef, setRecipeRef] = useState(null);
  const SEO = {
    title: `Chezz Laura | ${props.recipe.Name}`,
    description: `${props.recipe.Name}`
  }
  const navigation = [];
  for (let i = 0; i < 4; i++) {
    navigation.push({
      label: props.t(`navigations.nav-${i}`),
      slug: props.t(`navigations.slug-${i}`)
    })
  }
  return (
    <>
    <Header navigation ={navigation}/>
    <NextSeo {...SEO} />
    <div className="bg-linen font-dLibre text-dBrown">
      <header
        className="relative w-full bg-center bg-no-repeat bg-cover py-32 lg:py-56 px-6 mb-12 z-0"
        style={{
          backgroundImage:
            "url(../../assets/images/le-buzz-jlNtfHi8oiI-unsplash.jpg)",
        }}
      >
        {/* Blur Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-linen pointer-events-none z-0" />
      </header>
      <main className="w-full pb-24 lg:pb-32">
        <Introduction
          title={props.recipe.Name}
          desc={props.recipe.Description}
        />
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col trigger">
            <div className="grid grid-cols-1 gap-12 pin">
              <BasicInfo
                yd={props.recipe.Yield}
                prep={props.recipe.PrepTime}
                cook={props.recipe.CookTime}
                total={props.recipe.TotalTime}
                toPrint={recipeRef}
                ingredients={props.recipe.Ingredients}
                title={props.t('recipe.ingredients')}
              />
              <Share title={props.t('recipe.share')}/>
            </div>
          </div>
          {/* Main */}
          <div className="lg:col-span-2 w-full grid grid-cols-1 gap-12">
            {/*<Ingredients  content={props.recipe.Ingredients} />*/}
            <div className="w-full flex flex-col">
              <h6 className="text-xl md:text-3xl font-bold leading-none mb-6 w-full">
                {props.t('recipe.prep-header')}
              </h6>
              {/* Iframe Container */}
              {/*
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
              */}
              <Steps content={props.recipe.Preparation} ref={e => setRecipeRef(e)}/>
            </div>
          </div>
        </section>
        {/* Showcase/Recipes/Comments */}
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 mb-24 lg:mb-32">
          <Result
            r1={props.recipe.Result1.formats.medium.url}
            r2={props.recipe.Result2.formats.medium.url}
          />
          <article className="w-full flex flex-col items-center mb-24 lg:mb-32">
            <Heading label={props.t('recipe.similar')} />
            <Similar content={props.similar}/>
          </article>
          {/* Comments */}
          <article className="w-full flex flex-col">
            <h6 className="text-xl md:text-3xl font-bold leading-none mb-6 w-full">
              Comments
            </h6>
            <CommentForm recipe={props.recipe}/>
            {/* Dummy Comments */}
            <div className="grid grid-cols-1 gap-10">
              {/* Repeat Comment */}
              {props.recipe.comments.map(comment => (
                <Comment first={comment.FirstName} last={comment.LastName} content={comment.Content} date={comment.created_at}/>
              ))}
            </div>
          </article>
        </section>
        {/* Instagram */}
        {/*
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 flex flex-col items-center">
          <Heading label="Instagram" />
         
          <article className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
            
            <IGImage />
            <IGImage />
            <IGImage />
            <IGImage />
          </article>
        </section>
        */}
      </main>
    </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { API_URL } = process.env;
  const recipeRes = await fetch(`${API_URL}/recipes?Slug=${query.slug}`);
  const recipeData = await recipeRes.json();

  const similarRes = await fetch(`${API_URL}/recipes?navigation.slug=${query.category}`);
  const similarData = await similarRes.json();

  // cover image
  return {
    props: {
      recipe: recipeData[0],
      similar: similarData
    },
  };
}

export default withTranslation('common')(RecipePage);
