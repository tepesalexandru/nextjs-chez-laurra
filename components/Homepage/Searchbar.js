import React, { useState } from "react";
import {Link} from "../../i18n";

export default function Searchbar(props) {
  const [term, setTerm] = useState("");
  return (
    <header
      className="relative w-full bg-center bg-no-repeat bg-cover pt-32 pb-48 px-6 mb-6 z-0"
      style={{ backgroundImage: "url(./assets/images/bg-ret.jpeg)" }}
    >
      <form className="relative max-w-3xl w-full mx-auto" action>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full fStyle py-2 pl-4 pr-24 shadow-md rounded-full bg-linen"
          type="search"
          name="search"
          id="search"
          placeholder="Search for recipes"
          autoComplete="off"
        />
        <Link
          href="/recipes?search=[searchTerm]"
          as={`/recipes?search=${term}`}
        >
          <a>
            <div className="absolute top-0 right-0 h-full py-1 pr-1">
              <input
                className="fStyle bg-red text-linen py-1 px-4 cursor-pointer rounded-full"
                type="submit"
                defaultValue="Search"
              />
            </div>
          </a>
        </Link>
      </form>
      {/* Blur Effect*/}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-linen pointer-events-none z-0" />
    </header>
  );
}
