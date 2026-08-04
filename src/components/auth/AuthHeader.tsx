interface AuthHeaderProps {
  title: string;
  subtitle: string;
  onClose: () => void;
}

import { X } from "lucide-react";
import logo from "../../assets/naturalwoodslogo.png"; // adjust if needed

export default function AuthHeader({
  title,
  subtitle,
  onClose,
}: AuthHeaderProps) {
  return (
    <>
      <button
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
      >
        <X size={20} />
      </button>

      <div className="mb-8 flex flex-col items-center">

        <img
          src={logo}
          alt="Natural Woods"
          className="mb-5 h-20 w-auto"
        />

        <h2 className=" text-4xl text-[#2F2115]">
          {title}
        </h2>

        <p className="mt-2 text-center text-gray-500">
          {subtitle}
        </p>

      </div>
    </>
  );
}