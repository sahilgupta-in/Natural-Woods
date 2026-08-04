import { useState } from "react";
import { Search } from "lucide-react";

import { spiritualProducts } from "../Data/spiritualProducts";
import ProductCard from "../components/ProductCard";

export default function SpiritualCollection() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const products = spiritualProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  

  if (sort === "a-z") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <section className="bg-[#F8F4EC] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        {/* Heading */}
        <div className="mb-10">
          <h1
            className="text-4xl lg:text-5xl text-[#2F2115]"
            
          >
            Spiritual Paintings
          </h1>

          <p className="mt-2 text-gray-600">
            Discover our handcrafted spiritual paintings.
          </p>
        </div>

        {/* Search + Sort */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Search */}
          <div className="relative w-full md:max-w-md">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search paintings..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-[#C79A3B]"
            />

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="text-sm text-gray-600">
              Sort by:
            </span>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#C79A3B]"
            >
              <option value="featured">Featured</option>
              <option value="a-z">A - Z</option>
            
            </select>

          </div>

        </div>

        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              category="spiritual"
            />
          ))}
        </div>

      </div>
    </section>
  );
}