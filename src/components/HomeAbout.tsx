import { Link } from "react-router-dom";
import aboutImage from "../assets/store.webp"; // your image

export default function HomeAbout() {
  return (
    <section
      id="about"
      className="bg-white py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Left */}
        <div>
          <h2 className="text-4xl text-[#2F2115] lg:text-5xl">
            Natural Woods
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#8B5E34]">
            At <strong>Natural Woods</strong>, we bring together the beauty of
            traditional Indian craftsmanship and timeless design. From sacred
            idols to handcrafted décor, every piece reflects heritage,
            artistry, and attention to detail.
          </p>

          <p className="mt-4 text-lg leading-8 text-[#8B5E34]">
            Rooted in culture and curated for modern homes, our collections are
            designed to add meaning, elegance, and a sense of tradition to your
            space.
          </p>

          <Link
            to="/about"
            className="mt-10 inline-flex rounded-full border border-[#B77A38] px-8 py-4 text-[#2F2115] transition hover:bg-[#C79A3B]  hover:text-white"
          >
            About Us
          </Link>
        </div>

        {/* Right */}
        <div>
          <img
            src={aboutImage}
            alt="Natural Woods Showroom"
            className="w-full h-full rounded-3xl object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}