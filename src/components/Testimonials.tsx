import { testimonials } from "../Data/testimonials";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F4EC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-16 flex flex-col items-center">
            {/* Top Heading */}
            <div className="flex items-center gap-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2F2115]">
                What Our
              </h3>
            </div>

            {/* Main Heading */}
            <h2 className="mt-2 text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#2F2115]">
              Customers Say
            </h2>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-2xl bg-white p-8 shadow-lg h-full">
                <div className="mb-4 flex gap-1 text-[#C79A3B]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <FaQuoteLeft className="mb-5 text-[#D8C4A0]" />

                <p className="italic leading-8 text-[#4D4035]">{item.review}</p>

                <div className="mt-8 border-t pt-5">
                  <h4 className="font-semibold text-[#3A2A1D]">{item.name}</h4>

                  <span className="text-sm text-[#C79A3B]">Verified Buyer</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
