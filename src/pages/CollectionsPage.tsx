import { Link } from "react-router-dom";
import CollectionHero from "../components/CollectionHero";
import { collections } from "../Data/collections";

export default function CollectionsPage() {
  return (
    <>
      <CollectionHero />

      <section className="bg-[#faf7f1] py-8">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((item) => (
              <Link
                key={item.id}
                to={item.slug}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-[4/4.3] overflow-hidden bg-[#f8f8f8]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#2F2115]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-2 text-sm tracking-[4px] text-[#D4A24A]">
                    {item.id}
                  </p>

                  <h3 className="mb-3  text-3xl text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm uppercase tracking-[3px] text-[#D4A24A]">
                    Explore Collection →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}