import React from "react";
import {NextSeo} from 'next-seo'

export default function Contact() {

  const SEO = {
    title: "Chezz Laura | Contact",
    description: "Despre mine"
  }

  return (
    <>
      <NextSeo {...SEO} />
      <div
        id="darkBG"
        className="fixed top-0 left-0 w-full h-screen bg-dBrown bg-opacity-50 z-30 hidden"
      />
      <header
        className="relative w-full bg-center bg-no-repeat bg-cover py-32 lg:py-56 px-6 mb-12 z-0"
        style={{ backgroundImage: "url(./assets/images/contact.jpg)" }}
      >
        {/* Blur Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-linen pointer-events-none z-0" />
      </header>

      <div className="bg-linen font-dLibre text-dBrown pt-16">
        <main className="w-full">
          {/* Name & Info */}
          <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 mb-24 lg:mb-32">
            <h1 className="text-3xl md:text-5xl font-bold text-center leading-none mb-3 z-10">
              Bonjour si bine ai venit Chez Laurra!
            </h1>
            {/* Decoration */}
            <div className="max-w-xs md:w-full mx-auto px-12 flex justify-around z-10 mb-6">
              <div className="h-1 w-1 bg-dBrown rounded-full" />
              <div className="h-1 w-3 bg-dBrown rounded-full ml-2" />
              <div className="h-1 flex-1 bg-dBrown rounded-full mx-2" />
              <div className="h-1 w-3 bg-dBrown rounded-full mr-2" />
              <div className="h-1 w-1 bg-dBrown rounded-full" />
            </div>
            {/* Info */}
            <p className="font-medium max-w-4xl w-full mx-auto text-center text-sm md:text-lg">
              Eu sunt Laura si locuiesc in Franta. Pe langa gatit, imi place sa
              organizez si sa decorez bucatarii. Descurajez food waste-ul
              (risipa de mancare) si sustin conceptele de reciclare si economie
              circulara. La Chez Laurra vei gasi retete predominant vegetariene.
              Gatesc in principal retete inspirate din bucataria franceza,
              italiana, indiana, romaneasca, englezeasca, insa sunt deschisa la
              a incerca feluri de mancare din toate bucatariile. Cu cat mai
              diverse aromele si cu cat mai multe culori in farfurie, cu atat
              mai bine ! Inspiratia mi-o gasesc in carti de gatit sau carti al
              caror autor sunt diversi chefi (Jamie Oliver, Gordon Ramsay,
              Ottolenghi, Luana Belmondo etc.), reviste (Cuisine Actuelle,
              Saveur), conturi de Instagram, de Youtube, cat si site-uri
              specializate (BBC Good Food in principal).
            </p>
          </section>
          {/* Email me! */}
          <section className="max-w-screen-xl w-full mx-auto px-6 md:px-12 mb-24 lg:mb-32">
            <article className="w-full flex flex-col">
              <h6 className="text-xl md:text-3xl font-bold leading-none mb-6 w-full">
                Email me
                <a href="mailto:chezzlaura@gmail.com" className="text-xs">
                  (chezzlaura@gmail.com)
                </a>
              </h6>
              <form
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 bg-almond rounded-lg shadow-lg p-6 lg:px-8"
                action
              >
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1" htmlFor="Name">
                    Name
                  </label>
                  <input
                    className="w-full fStyle py-3 px-6 shadow-md rounded-lg bg-linen"
                    type="text"
                    name="Name"
                    id="Name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full fStyle py-3 px-6 shadow-md rounded-lg bg-linen"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                {/* Query */}
                <div className="flex flex-col md:col-span-2">
                  <label className="text-sm font-medium mb-1" htmlFor="query">
                    Your Query
                  </label>
                  <textarea
                    className="w-full fStyle py-3 px-6 shadow-md rounded-lg bg-linen"
                    name="query"
                    id="query"
                    cols={30}
                    rows={5}
                    placeholder="I wanted to talk about..."
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  {/* Send */}
                  <div className="flex md:mt-2">
                    <input
                      className="pButton cursor-pointer"
                      type="submit"
                      defaultValue="Submit"
                    />
                  </div>
                </div>
              </form>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
