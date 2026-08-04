import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { bestSellers } from "../Data/bestSellers";
import BestSellerCard from "./BestSellerCard";

export default function BestSellers() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl md:text-3xl text-[#2F2115]">
              Featured Products
            </h3>
          </div>

          <h2 className="mt-2 text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F2115]">
            Best Sellers
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          observer={true}
          observeParents={true}
          speed={900}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <BestSellerCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
