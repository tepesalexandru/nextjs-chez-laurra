import React from "react";
import logo from 'public/assets/images/logo.png'

export default function Header() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex flex-col px-6 bg-linen mb-8 z-50 shadow-lg">
        <section className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
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
            <a
              className="fStyle lg:mr-16 rounded-full flex-shrink-0 my-2"
              href="/"
            >
              <img
                className="h-12"
                src={logo}
                alt="Chez Laurra"
              />
            </a>
          </div>
          {/* Nav Links */}
          <ul className="hidden lg:flex items-center font-medium">
            <li className="mx-4">
              <a className="fStyle px-1 py-2 rounded-full text-center" href>
                Bucartarie Internationala
              </a>
            </li>
            <li className="mx-4">
              <a className="fStyle px-1 py-2 rounded-full text-center" href>
                Bucartarie Fracenza
              </a>
            </li>
            <li className="mx-4">
              <a className="fStyle px-1 py-2 rounded-full text-center" href>
                Brutarie
              </a>
            </li>
            <li className="mx-4">
              <a className="fStyle px-1 py-2 rounded-full text-center" href>
                Desertei
              </a>
            </li>
            <li className="mx-4">
              <a className="fStyle px-1 py-2 rounded-full text-center" href>
                Contact
              </a>
            </li>
          </ul>
          {/* Language */}
          <button className="fStyle bg-almond font-bold rounded-full shadow-sm py-2 px-4 text-xs">
            Switch to French
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
    </>
  );
}
