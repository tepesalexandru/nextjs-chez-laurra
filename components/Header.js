import React from "react";
import logo from "public/assets/images/logo.png";

import {i18n, Link} from '../i18n';

function Header(props) {
  const renderListItems = () => {
    return props.navigation.map((nav) => (
      <Link key={nav.slug} href="/recipes/[category]" as={`/recipes/${nav.slug}`}>
        <a>
          <li className="mx-4">
            <p className="fStyle px-1 py-2 rounded-full text-center">
              {nav.label}
            </p>
          </li>
        </a>
      </Link>
    ));
  };

  const getLanguage = () => {
    if (i18n.language === 'ro') return "fr";
    else if (i18n.language === 'fr') return "en";
    else return "ro";
  }

  return (
    <div className="bg-linen font-dLibre text-dBrown">
      <nav className="fixed top-0 left-0 w-full flex flex-col bg-linen mb-8 z-50 shadow-lg">
        <section className="max-w-screen-xl mx-auto w-full flex justify-between items-center px-6 md:px-12">
          <div className="flex items-center">
            {/* Menu Icon */}
            <div className="flex-shrink-0 lg:hidden -ml-4">
              <button
                className="fStyle hamburger hamburger--elastic transform scale-75 origin-center"
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
            {/* Logo */}
            <Link href="/">
            <a
              className="fStyle lg:mr-16 rounded-full flex-shrink-0 my-2"
            >
              <img className="h-12" src={logo} alt="Chez Laurra" />
            </a>
            </Link>
          </div>
          {/* Nav Links */}
          <ul className="hidden lg:flex items-center font-medium">
            {renderListItems()}
            <Link href="/contact">
              <a>
                <li className="mx-4">
                  <p className="fStyle px-1 py-2 rounded-full text-center">
                    Contact
                  </p>
                </li>
              </a>
            </Link>
          </ul>
          {/* Language */}
          <button onClick={() => i18n.changeLanguage(getLanguage())} className="fStyle bg-wattle font-bold rounded-full shadow-sm py-2 px-4 text-xs">
            Change to: {getLanguage().toUpperCase()}
          </button>
        </section>
      </nav>
      <section
        id="mNav"
        className="fixed top-0 left-0 w-full transform translate-y-20 px-6 z-40 hidden"
      >
        <div className="mNList w-full bg-linen rounded-lg shadow-lg py-2 px-6 flex flex-col text-center text-lg md:text-2xl font-medium">
          <a className="mNListItem" href="#">
            Bucartarie Internationala
          </a>
          <a className="mNListItem" href="#">
            Bucartarie Fracenza
          </a>
          <a className="mNListItem" href="#">
            Brutarie
          </a>
          <a className="mNListItem" href="#">
            Desertei
          </a>
          <a className="mNListItem" href="#">
            Contact
          </a>
        </div>
      </section>
    </div>
  );
}

export default Header;