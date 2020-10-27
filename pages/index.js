import fetch from "isomorphic-unfetch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Book from "../components/Homepage/Book";
import Heading from "../components/Homepage/Heading";
import IGImage from "../components/Homepage/IGImage";
import Recipes from "../components/Homepage/Recipes";
import Searchbar from "../components/Homepage/Searchbar";

import { withTranslation, Link } from "../i18n";
function Home(props) {
  const navigation = [];
  for (let i = 0; i < 4; i++) {
    navigation.push({
      label: props.t(`navigations.nav-${i}`),
      slug: props.t(`navigations.slug-${i}`),
    });
  }

  return (
    <>
      <Header navigation={navigation} />
      <div className="bg-white font-dLibre text-dBrown">
        <div
          id="darkBG"
          className="fixed top-0 left-0 w-full h-screen bg-dBrown bg-opacity-50 z-30 hidden"
        />
        <Searchbar />
        <main className="w-full pb-24 lg:pb-32">
          {/* Recipes */}
          <Recipes recipes={props.recipes} title={props.t("home.header")} />
          {/*<Book link={props.book.ShortText} description={props.book.LongText}/>*/}
          {/* Instagram 
        <section className="max-w-6xl w-full mx-auto px-6 md:px-12 flex flex-col items-center">
          <Heading title="Our Instagram" />
      
          <article className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
         
            <IGImage />
            <IGImage />
            <IGImage />
            <IGImage />
          </article>
        </section>
      */}
          <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 flex flex-col items-center mb-24 lg:mb-32">
            <h1 className="text-3xl md:text-5xl font-bold text-center leading-none mb-3 z-10">
              {props.t('home.all')}
            </h1>
            {/* Decoration */}
            <div className="max-w-xs w-full mx-auto px-12 flex justify-around mb-12 z-10">
              <div className="h-1 w-1 bg-dBrown rounded-full" />
              <div className="h-1 w-3 bg-dBrown rounded-full ml-2" />
              <div className="h-1 flex-1 bg-dBrown rounded-full mx-2" />
              <div className="h-1 w-3 bg-dBrown rounded-full mr-2" />
              <div className="h-1 w-1 bg-dBrown rounded-full" />
            </div>
            {/* Categories */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-sm">
              {/* Category Card */}
              <div className="flex flex-col items-center">
                <div className="longImg">
                  <img
                    className="sImg"
                    src="https://www.tokyoweekender.com/wp-content/uploads/2017/04/finedine-dishes-800x500.png"
                    alt="food"
                  />
                </div>
                {/* Name */}
                <Link href="/recipes/[category]" as={`/recipes/${props.t(`navigations.slug-${0}`)}`} >
                <a className="cardLink">
                  <h3 className="flex-1 truncate">{props.t(`navigations.nav-${0}`)}</h3>
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
              {/* Category Card */}
              <div className="flex flex-col items-center">
                <div className="longImg">
                  <img
                    className="sImg"
                    src="https://www.familysearch.org/blog/en/wp-content/uploads/sites/2/2020/07/french-meal-from-above.jpg"
                    alt="food"
                  />
                </div>
                <Link  href="/recipes/[category]" as={`/recipes/${props.t(`navigations.slug-${1}`)}`} >
                {/* Name */}
                <a className="cardLink">
                  <h3 className="flex-1 truncate">{props.t(`navigations.nav-${1}`)}</h3>
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
              {/* Category Card */}
              <div className="flex flex-col items-center">
                <div className="longImg">
                  <img
                    className="sImg"
                    src="https://media.kaufland.com/images/PPIM/AP_Content_1010/rum/41/41/Asset_2564141.jpg"
                    alt="food"
                  />
                </div>
                {/* Name */}
                <Link href="/recipes/[category]" as={`/recipes/${props.t(`navigations.slug-${2}`)}`} >
                <a className="cardLink">
                  <h3 className="flex-1 truncate">{props.t(`navigations.nav-${2}`)}</h3>
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
              {/* Category Card */}
              <div className="flex flex-col items-center">
                <div className="longImg">
                  <img
                    className="sImg"
                    src="https://i.insider.com/58a4b099fbaed522008b4625?width=1100&format=jpeg&auto=webp"
                    alt="food"
                  />
                </div>
                {/* Name */}
                <Link href="/recipes/[category]" as={`/recipes/${props.t(`navigations.slug-${3}`)}`} k>
                <a className="cardLink">
                  <h3 className="flex-1 truncate">{props.t(`navigations.nav-${3}`)}</h3>
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
            </div>
          </section>
          
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/recipes`);
  const data = await res.json();

  const bookRes = await fetch(`${API_URL}/generals/2`);
  const bookData = await bookRes.json();

  return {
    props: {
      recipes: data,
      book: bookData,
    },
  };
}

export default withTranslation("common")(Home);
