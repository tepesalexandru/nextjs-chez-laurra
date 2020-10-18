import fetch from "isomorphic-unfetch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Book from "../components/Homepage/Book";
import Heading from "../components/Homepage/Heading";
import IGImage from "../components/Homepage/IGImage";
import Recipes from "../components/Homepage/Recipes";
import Searchbar from "../components/Homepage/Searchbar";

function Home(props) {
  console.log("book", props.book);
  return (
    <div className="bg-linen font-dLibre text-dBrown">
      <div
        id="darkBG"
        className="fixed top-0 left-0 w-full h-screen bg-dBrown bg-opacity-50 z-30 hidden"
      />
      <Searchbar />
      <main className="w-full pb-24 lg:pb-32">
        {/* Recipes */}
      
        <Recipes recipes={props.recipes}/>
      
        <Book link={props.book.ShortText} description={props.book.LongText}/>
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
      </main>
      <Footer />
    </div>
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
      book: bookData
    }
  }
}

export default Home;
