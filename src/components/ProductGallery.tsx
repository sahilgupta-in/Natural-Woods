import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  name: string;
  selectedImage: number;
  onSelect: (index: number) => void;
}

export default function ProductGallery({
  images,
  name,
  selectedImage,
  onSelect,
}: ProductGalleryProps) {
  const currentImage = images[selectedImage] || images[0];

  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();

    setOrigin({
      x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[90px_minmax(0,1fr)]">
      {/* Thumbnails */}
      <div className="order-2 flex gap-3 overflow-x-auto pb-2 lg:order-1 lg:flex-col lg:overflow-visible">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              onSelect(index);
              setZoomed(false);
            }}
            className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition ${
              selectedImage === index
                ? "border-[#C79A3B]"
                : "border-gray-200 hover:border-[#C79A3B]"
            }`}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 lg:order-2">
        <div
          className="relative flex h-[350px] w-full cursor-crosshair items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white sm:h-[450px] md:h-[550px] lg:h-[650px]"
          onClick={() => setZoomed((prev) => !prev)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setOrigin({ x: "50%", y: "50%" });
          }}
        >
          <img
            src={currentImage}
            alt={name}
            draggable={false}
            style={{
              transformOrigin: `${origin.x} ${origin.y}`,
              transform: zoomed ? "scale(2.5)" : "scale(1)",
            }}
            className="max-h-full max-w-full object-contain p-6 transition-transform duration-200 ease-out"
          />

          {/* Zoom Badge */}
          <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-[#2F2115] shadow">
            {zoomed ? "Click to Zoom Out" : "Click to Zoom"}
          </div>
        </div>
      </div>
    </div>
  );
}
