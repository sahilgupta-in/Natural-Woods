import SectionTitle from "./SectionTitle";

import eco from "../assets/icons/eco.svg";
import install from "../assets/icons/install.svg";
import warranty from "../assets/icons/warranty.svg";

import handmade from "../assets/icons/handmade.svg";
import service from "../assets/icons/location.svg";
import advice from "../assets/icons/certificate.svg";

const features = [
  {
    title: "Eco Friendly",
    icon: eco,
  },
  {
    title: "Easy to Install",
    icon: install,
  },
  {
    title: "Lifetime Warranty",
    icon: warranty,
  },
  {
    title: "Patent Designers",
    icon: advice,
  },
  {
    title: "Handmade Products",
    icon: handmade,
  },
  {
    title: "Installation Service",
    icon: service,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#F8F4EC] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle />

        <div className="mt-14 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-16 w-16  object-contain"
              />

              <h3 className="mt-5 font-jost text-lg font-medium text-[#3A2A1D]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
