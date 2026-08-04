import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  id: string | number;
  image: string;
  name: string;
  category?: string;
}

export default function ProductCard({
  id,
  image,
  name,
  category,
}: Props) {
  const safeCategory = category ?? "nature";

  return (
    <Link to={`/collections/${safeCategory}/${id}`}>
      <div className="group rounded-2xl bg-white shadow transition hover:shadow-xl">

        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={name}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="mb-3 flex text-[#C79A3B]">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>

          <h3
            className="text-lg font-medium text-[#2F2115]"
            
          >
            {name}
          </h3>

          
        </div>

      </div>
    </Link>
  );
}