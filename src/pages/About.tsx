import { Link } from "react-router-dom";
import aboutImage from "../assets/nwteam.jpg";
import { Hammer, Leaf, Gem } from "lucide-react";

export default function About() {
  return (
    <main className="bg-[#F8F4EC]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={aboutImage}
          alt="Natural Woods Team"
          className="h-[300px] w-full object-cover sm:h-[420px] md:h-[550px] lg:h-[650px] xl:h-[750px]"
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Bottom Text */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto flex justify-center  max-w-7xl px-6 lg:bottom-14 lg:px-8">
          <h1 className="max-w-5xl  text-2xl text-center font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            The People Who Bring Wood to Life
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className=" text-4xl text-[#2F2115]">About Us</h2>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            At Natural Woods, we believe true craftsmanship begins with
            respecting nature. Every piece we create is made from reclaimed wood
            sourced from old demolished homes and responsibly collected firewood
            from Sangli, Kolhapur, Belgaum, Hubli, and the Konkan region—never
            from freshly cut trees.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            Each piece of wood undergoes a meticulous process of cleaning,
            seasoning, shaping, and precision craftsmanship. By combining
            skilled artisanship with modern CNC technology, we transform
            reclaimed timber into timeless wall décor and wooden art. Even our
            production waste is repurposed into eco-friendly plant compost,
            ensuring minimal environmental impact.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            Our mission is simple: to create beautiful, handcrafted wooden
            masterpieces while preserving nature for future generations.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F4EC] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center  text-4xl text-[#2F2115] md:text-5xl">
            Why Choose Natural Woods
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-3xl bg-white p-10 text-center shadow-sm transition-all duration-300 ">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F4EC] text-[#2F2115] transition  ">
                <Hammer size={36} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#2F2115]">
                Handcrafted
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Every product is individually handcrafted by skilled artisans,
                ensuring every piece is unique and beautifully finished.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl bg-white p-10 text-center shadow-sm transition-all duration-300 ">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F4EC] text-[#2F2115] transition ">
                <Leaf size={36} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#2F2115]">
                Sustainable
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                We responsibly reuse reclaimed wood, giving every piece a second
                life while reducing waste and preserving nature.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl bg-white p-10 text-center shadow-sm transition-all duration-300  ">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F4EC] text-[#2F2115] transition ">
                <Gem size={36} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#2F2115]">
                Premium Quality
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Every creation is crafted with precision, premium materials, and
                exceptional attention to detail for lasting beauty.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="uppercase tracking-[4px] text-[#C79A3B]">
            Discover Timeless Craftsmanship
          </p>

          <h2 className="mt-4  text-4xl text-[#2F2115] md:text-5xl">
            Bring the Beauty of Handcrafted Wood into Your Space
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore our exclusive collection of handcrafted paintings,
            sculptures, wall art, and custom wooden creations designed to add
            warmth, elegance, and character to every home.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/collections"
              className="rounded-full bg-[#C79A3B] px-8 py-4 text-base font-medium text-white transition hover:bg-[#b58a34]"
            >
              Explore Collections
            </Link>

            
          </div>
        </div>
      </section>
    </main>
  );
}
