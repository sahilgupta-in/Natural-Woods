import { categories } from "../Data/categories";
import CollectionCard from "./CollectionCard";
import { Link } from "react-router-dom";

export default function Collections() {
  return (
    <section className="bg-[#F8F4EC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16 flex flex-col items-center">
          <div className="flex items-center gap-3 sm:gap-5">
            

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2F2115]">
              Explore Our
            </h3>

            
          </div>

          <h2 className="mt-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F2115]">
            Crafted Collections
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <CollectionCard key={item.id} {...item} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center">
          <Link
            to="/collections"
            className="rounded-full border border-[#C79A3B]
                       px-6 py-3
                       sm:px-8 sm:py-3.5
                       lg:px-10 lg:py-4
                       text-sm sm:text-base lg:text-lg
                       text-[#5A3E22]
                       transition-all duration-300
                       hover:bg-[#C79A3B]
                       hover:text-white"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
