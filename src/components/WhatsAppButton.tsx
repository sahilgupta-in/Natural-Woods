import { FaWhatsapp } from "react-icons/fa";

const phoneNumber = "8484848401"; // Replace with your client's WhatsApp number

const message = encodeURIComponent(
  "Hello! I visited your Natural Woods website and I'm interested in your handcrafted wooden artwork. Please share more details."
);

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] group">
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-sm text-white shadow-lg group-hover:block">
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 "
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}