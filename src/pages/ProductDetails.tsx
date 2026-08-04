import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductGallery from "../components/ProductGallery";
import RelatedProducts from "../components/RelatedProducts";
import { getCategoryConfig, getCategoryPath, getProductByCategoryAndId } from "../Data/catalog";
import { Star } from "lucide-react";
import { FiShare2 } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ProductDetails() {
  const { category, id } = useParams();

  const [selectedImage, setSelectedImage] = useState(0);

  const categoryConfig = category ? getCategoryConfig(category) : null;
  const product =
    category && id ? getProductByCategoryAndId(category, id) : null;

  if (!product || !categoryConfig) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-5 py-20">
        <div className="rounded-3xl bg-[#FCF8F0] p-10 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[4px] text-[#C79A3B]">
            Not found
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#2F2115]">
            This artwork is not available yet.
          </h1>
          <p className="mt-3 text-gray-600">
            Please return to the collection and explore similar pieces.
          </p>
          <Link
            to="/collections"
            className="mt-6 inline-flex rounded-full bg-[#2F2115] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#483221]"
          >
            Browse collections
          </Link>
        </div>
      </div>
    );
  }

  const shareProduct = async () => {
    const shareData = {
      title: product.name,
      text: `Check out this beautiful artwork: ${product.name}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Product link copied!");
      }
    } catch (error) {
      console.error("Share cancelled", error);
    }
  };

  const facebookShare = () => {
    const url = encodeURIComponent(window.location.href);

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "width=600,height=600",
    );
  };

  const twitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(product.name);

    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      "_blank",
      "width=600,height=600",
    );
  };

  const galleryImages = (
    product.images && product.images.length > 0
      ? product.images
      : [product.image]
  ).filter(Boolean) as string[];
  const relatedProducts = categoryConfig.products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);
  const averageRating = Math.round(
    (product.reviews?.reduce((sum, review) => sum + review.rating, 0) ?? 0) /
      (product.reviews?.length || 1),
  );
  const details: [string, string | undefined][] = [
    ["Dimensions", product.dimensions],
    ["Collection", categoryConfig.title],
    ["Design Type", product.designType],
    ["Material", product.material],
    ["Occasion", product.occasion],
  ];

  return (
    <main className="bg-white px-4 py-10 lg:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 text-sm text-gray-600">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/" className="transition hover:text-[#C79A3B]">
              Home
            </Link>
            <span>/</span>
            <Link to="/collections" className="transition hover:text-[#C79A3B]">
              Collections
            </Link>
            <span>/</span>
            <Link
              to={getCategoryPath(category!)}
              className="transition hover:text-[#C79A3B]"
            >
              {categoryConfig.title}
            </Link>
            <span>/</span>
            <span className="text-[#2F2115]">{product.name}</span>
          </div>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

  {/* Sticky Gallery */}
  <div className="self-start lg:sticky lg:top-24 h-fit">
    <ProductGallery
      images={galleryImages}
      name={product.name}
      selectedImage={selectedImage}
      onSelect={setSelectedImage}
    />
  </div>

          <section className="rounded-[28px]  bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[4px] text-[#C79A3B]">
              {categoryConfig.title}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#2F2115] sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className={
                      index < averageRating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 font-medium text-[#2F2115]">
                  ({averageRating}.0)
                </span>
              </div>

              <span>•</span>

              <span>{product.dimensions}</span>

              <span>•</span>

              <span>{product.medium}</span>
            </div>

            <p className="mt-6 text-3xl font-semibold text-[#2F2115]">
              Price On Request
            </p>
            <div className="mt-8 border-t border-gray-200 pt-4">
              

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={shareProduct}
                  className="inline-flex items-center gap-2 rounded-full cursor-pointer  px-2 py-2.5 text-sm font-medium text-[#2F2115] transition-all "
                >
                  <FiShare2 size={20} />
                  Share
                </button>

                <button
                  onClick={facebookShare}
                  className="flex items-center gap-2 rounded-full  cursor-pointer  px-4 py-2 text-sm transition  "
                >
                  <FaFacebookF className="text-blue-600" size={20} />
                  
                </button>

                <button
                  onClick={twitterShare}
                  className="flex items-center gap-2 rounded-full cursor-pointer   px-4 py-2 text-sm transition  "
                >
                  <FaXTwitter size={20} />
                </button>
              </div>
            </div>

            <div className="mt-5">
              <div className="rounded-2xl text-sm leading-7 text-gray-700">
                <dl>
                  {details
                    .filter(([, v]) => v)
                    .map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between border-b border-dashed border-gray-200 py-3"
                      >
                        <dt className="text-gray-500">{label}</dt>
                        <dd className="text-right text-gray-700">{value}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="mb-4 text-2xl text-[#2F2115]">
                Product Description
              </h2>

              <div className="rounded-2xl ">
                <p className="leading-8 text-gray-700">{product.description}</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedProducts
          products={relatedProducts}
          category={categoryConfig.slug}
          currentProductId={product.id}
        />
      </div>
    </main>
  );
}

