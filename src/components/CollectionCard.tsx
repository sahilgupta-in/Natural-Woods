import { Link } from "react-router-dom";

interface Props {
  title: string;
  image: string;
  link: string;
}

export default function CollectionCard({ title, image, link }: Props) {
  return (
    <Link to={link} className="group block">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="h-[430px] w-full rounded-3xl object-cover"
        />
      </div>
    
      <h3 className="mt-5 text-center text-2xl  text-[#5A3E22] leading-snug">
        {title}
      </h3>
    </Link>
  );
}
