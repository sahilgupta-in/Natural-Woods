import { Link } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  link: string;
}

export default function BestSellerCard({ image, name, link }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="line-clamp-2 text-xl text-[#2F2115]">
          {name}
        </h3>

        <Link
          to={link}
          className="mt-5 block w-full rounded-full bg-[#C79A3B] py-3 text-center text-white transition hover:bg-[#A87A2E]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}