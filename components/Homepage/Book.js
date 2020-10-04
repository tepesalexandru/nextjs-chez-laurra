import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Book() {
  return (
    <section className="w-full bg-almond mb-24 lg:mb-32 book">
      <article className="max-w-6xl w-full mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {/* Book's Images */}
        <div className="flex flex-col">
          <div className="swiper-container gallery-top rounded-lg shadow-lg mb-2">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage:
                    "url(./assets/images/90901280_10217117937569191_6468587349004517376_n.jpg)",
                }}
              />
              <div
                className="swiper-slide"
                style={{
                  backgroundImage:
                    "url(./assets/images/E28145D0-51B6-4A93-BD4E-F514ADCD604F.jpg)",
                }}
              />
              <div
                className="swiper-slide"
                style={{
                  position: "asbolute",
                  backgroundImage: "url(./assets/images/IMG_0345.jpg)",
                }}
              />
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: "url(./assets/images/IMG_0510.jpg)",
                }}
              />
            </div>
          </div>
          {/* Thumbnails */}
          <div className="swiper-container gallery-thumbs">
            <Swiper className="swiper-wrapper">
              <SwiperSlide
                className="swiper-slide"
                style={{
                  backgroundImage:
                    "url(./assets/images/90901280_10217117937569191_6468587349004517376_n.jpg)",
                }}
              />
              <SwiperSlide
                className="swiper-slide"
                style={{
                  backgroundImage:
                    "url(./assets/images/E28145D0-51B6-4A93-BD4E-F514ADCD604F.jpg)",
                }}
              />
              <SwiperSlide
                className="swiper-slide"
                style={{
                  backgroundImage: "url(./assets/images/IMG_0345.jpg)",
                }}
              />
              <SwiperSlide
                className="swiper-slide"
                style={{
                  backgroundImage: "url(./assets/images/IMG_0510.jpg)",
                }}
              />
            </Swiper>
          </div>
        </div>
        {/* Info */}
        <aside className="w-full lg:col-span-2 md:py-3 flex flex-col items-start lg:px-12">
          <h2 className="w-full text-2xl md:text-4xl font-bold">
            Our Awesome Book
          </h2>
          <p className="w-full text-base md:text-xl italic mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            possimus libero nulla fugit accusamus voluptatibus unde repellat,
            eum voluptates excepturi magnam asperiores neque, accusantium
            praesentium adipisci odit non, amet sed aspernatur ducimus eveniet
            soluta. Excepturi, vitae! Doloribus, repellat accusamus! Laborum
            quos repellendus minima, quibusdam tempora ullam eos et ad nisi. Vel
            placeat, odit eveniet modi nam aut ipsum magni recusandae molestias.
            Ut modi laborum, ab numquam architecto distinctio reiciendis nihil
            quibusdam totam quisquam mollitia ea labore? Maxime, enim? Eum esse
            in possimus laborum, eveniet ipsa eius saepe repudiandae aperiam
            nobis iste neque officia molestias eaque obcaecati ullam dolore nam
            quo!
          </p>
          <a
            className="fStyle bg-red text-linen py-2 px-4 rounded-full font-bold"
            href="#"
          >
            Buy Now
          </a>
        </aside>
      </article>
    </section>
  );
}
