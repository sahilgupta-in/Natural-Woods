import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed  bottom-24 right-6 z-[9998] flex h-12 w-12 items-center justify-center rounded-full bg-[#2F2115] text-white shadow-lg transition-all duration-300 hover:bg-[#4B3422] hover:scale-110"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}