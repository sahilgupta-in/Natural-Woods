import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./Hero.css";

import GaneshHero from"../assets/GaneshHero.webp";
import hero0 from "../assets/Hero1.webp";
import hero1 from "../assets/Hero2.webp";
import hero2 from "../assets/Hero3.webp";
import hero3 from "../assets/Hero4.webp";
import hero4 from "../assets/Hero5.webp";

import GaneshPhone from "../assets/Ganeshphone.webp";
import hero1Mobile from "../assets/Hero1-Mobile.webp";
import hero2Mobile from "../assets/Hero2-Mobile.webp";
import hero3Mobile from "../assets/Hero3-Mobile.webp";
import hero4Mobile from "../assets/Hero4-Mobile.webp";
import hero5Mobile from "../assets/Hero5-Mobile.webp";

const heroImages = [
  { desktop: GaneshHero, mobile: GaneshPhone },
  { desktop: hero0, mobile: hero1Mobile },
  { desktop: hero1, mobile: hero2Mobile },
  { desktop: hero2, mobile: hero3Mobile },
  { desktop: hero3, mobile: hero4Mobile },
  { desktop: hero4, mobile: hero5Mobile },
];

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop
        observer
        observeParents
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="heroSwiper h-[100svh] md:h-[420px] lg:h-[600px] xl:h-[750px]"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.mobile}
              alt={`Hero ${index + 1}`}
              className="block h-full w-full object-cover md:hidden"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <img
              src={image.desktop}
              alt={`Hero ${index + 1}`}
              className="hidden h-full w-full object-cover md:block"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden lg:flex absolute left-6 top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-3 text-black backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#C79A3B]"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden lg:flex absolute right-6 top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-3 text-black backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#C79A3B]"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
