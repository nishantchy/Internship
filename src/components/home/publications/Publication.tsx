"use client";
import React from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { publications } from "./publications";
import Image from "next/image";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Publications({ lang }: { lang: string }) {
  const content = {
    en: {
      title: "Books of Baburam",
      view: "See More",
    },
    np: {
      title: "बाबुराम आचार्यका पुस्तकहरू",
      view: "अझै हेर्नुहोस्",
    },
  };
  const swiperRef = React.useRef<SwiperType>();

  const handleSlideClick = (clickedIndex: number) => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.realIndex;

      if (clickedIndex !== activeIndex) {
        if (clickedIndex > activeIndex) {
          swiperRef.current.slideNext();
        } else {
          swiperRef.current.slidePrev();
        }
      }
    }
  };

  return (
    <section className="section">
      <div className="container mx-auto mb-6 flex w-full items-center justify-between">
        <h2 className="text-commonTitle font-semibold">
          {content[lang as keyof typeof content].title}
        </h2>
        <Link
          href="/about-baburam-acharya/publication"
          className="flex items-center text-description text-button"
        >
          {content[lang as keyof typeof content].view}{" "}
          <ChevronRight
            style={{
              color: "#DB7C2E",
            }}
          />
        </Link>
      </div>

      <div
        className="relative h-[500px] w-full bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('/home/publication/booksbg.png')`,
        }}
      >
        {/* Swiper Container */}
        <div className="container mx-auto w-full overflow-hidden">
          <div className="relative mr-4 mt-11 flex h-[400px] items-center justify-center">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              initialSlide={1}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2.5,
                slideShadows: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[EffectCoverflow]}
              className="w-full"
            >
              {publications.map((publication, index) => (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleSlideClick(index)}
                >
                  <div className="transform transition-transform duration-300 hover:scale-105">
                    <Image
                      src={publication.image}
                      alt={publication.title}
                      width={228}
                      height={336}
                      className="rounded-lg shadow-xl"
                      priority={index < 3}
                      quality={100}
                      style={{
                        width: "228px",
                        height: "336px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
