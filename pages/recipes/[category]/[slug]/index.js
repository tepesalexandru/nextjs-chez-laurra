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
import {withTranslation, i18n} from '../../../../i18n'
import absoluteUrl from 'next-absolute-url'


function RecipePage(props) {
  console.log("full url", props.fullURL);
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

  const getImage = (idx) => {
    if (idx == 0) {
      if (props.recipe.Cover.formats.medium.url !== undefined) {
        return props.recipe.Cover.formats.medium.url;
      } else if (props.recipe.Cover.formats.thumbnail.url !== undefined) {
        return props.recipe.Cover.formats.thumbnail.url;
      }
    } else if (idx == 1) {
      if (props.recipe.Result1.formats.medium.url !== undefined) {
        return props.recipe.Result1.formats.medium.url;
      } else if (props.recipe.Result1.formats.thumbnail.url !== undefined) {
        return props.recipe.Result1.formats.thumbnail.url;
      }
    } else if (idx == 2) {
      if (props.recipe.Result2.formats.medium.url !== undefined) {
        return props.recipe.Result2.formats.medium.url;
      } else if (props.recipe.Result2.formats.thumbnail.url !== undefined) {
        return props.recipe.Result2.formats.thumbnail.url;
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

  const getDesc = (rec) => {
    if (i18n.language === "ro") {
      return rec.Description;
    } else if (i18n.language === "fr") {
      return rec.Description_Fr;
    } else {
      return rec.Description_Eng;
    }
  }

  const getIng = (rec) => {
    if (i18n.language === "ro") {
      return rec.Ingredients;
    } else if (i18n.language === "fr") {
      return rec.Ingredients_Fr;
    } else {
      return rec.Ingredients_Eng;
    }
  }

  const getPrep = (rec) => {
    if (i18n.language === "ro") {
      return rec.Preparation;
    } else if (i18n.language === "fr") {
      return rec.Preparation_Fr;
    } else {
      return rec.Preparation_Eng;
    }
  }

  return (
    <>
    <Header navigation ={navigation}/>
    <NextSeo {...SEO} />
    <div className="bg-white font-dLibre text-dBrown">
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
          title={getLabel(props.recipe)}
          desc={getDesc(props.recipe)}
        />
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col trigger">
            <div className="grid grid-cols-1 gap-12 pin">
              <BasicInfo
                ingredients={getIng(props.recipe)}
                title={props.t('recipe.ingredients')}
              />
              <Share title={props.t('recipe.share')} origin={props.fullURL}/>
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
              <Steps content={getPrep(props.recipe)} ref={e => setRecipeRef(e)}/>
            </div>
          </div>
        </section>
        {/* Showcase/Recipes/Comments */}
        <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 mb-24 lg:mb-32">
          <Result
            r1={getImage(1)}
            r2={getImage(2)}
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

export async function getServerSideProps({ query, req }) {
  const { API_URL } = process.env;
  const { origin } = absoluteUrl(req);
  const recipeRes = await fetch(`${API_URL}/recipes?Slug=${query.slug}`);
  const recipeData = await recipeRes.json();

  const similarRes = await fetch(`${API_URL}/recipes?navigation.slug=${query.category}`);
  const similarData = await similarRes.json();

  // cover image
  return {
    props: {
      recipe: recipeData[0],
      similar: similarData,
      fullURL: origin
    },
  };
}

export default withTranslation('common')(RecipePage);
