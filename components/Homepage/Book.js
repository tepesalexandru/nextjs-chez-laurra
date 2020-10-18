import React, { useState } from "react";
import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Thumbs]);

function Book(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(./assets/images/book-cover-${i}.jpg)`,
          }}
        />
      </SwiperSlide>
    );
  }
  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: "none" }}>
        <img
          style={{ height: "100px" }}
          src={`./assets/images/book-cover-${i}.jpg`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }
  return (
    <section className="w-full bg-almond mb-24 lg:mb-32 book">
      <article className="max-w-6xl w-full mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {/* Book's Images */}
        <div className="flex flex-col">
          <div className="swiper-container gallery-top rounded-lg shadow-lg mb-2">
            <div className="swiper-wrapper">
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log("Swiper initialized!", swiper)}
                onSlideChange={(swiper) => {
                  console.log("Slide index changed to: ", swiper.activeIndex);
                }}
                onReachEnd={() => console.log("Swiper end reached")}
              >
                {slides}
              </Swiper>
            </div>
          </div>
          {/* Thumbnails */}

          <Swiper
            id="thumbs"
            spaceBetween={4}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
          >
            {thumbs}
          </Swiper>
        </div>
        {/* Info */}
        <aside className="w-full lg:col-span-2 md:py-3 flex flex-col items-start lg:px-12">
          <h2 className="w-full text-2xl md:text-4xl font-bold">
            Our Awesome Book
          </h2>
          <p className="w-full text-base md:text-xl italic mb-6">
            {props.description}
          </p>
          <Link href={props.link}>
            <a className="fStyle bg-red text-linen py-2 px-4 rounded-full font-bold">
              Buy Now
            </a>
          </Link>
        </aside>
      </article>
    </section>
  );
}

export default Book;
