import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { getAllProducts } from "../Data/catalog";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  const products = getAllProducts();

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm">
      <div className="mx-auto mt-20 w-[95%] max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Search Header */}
        <div className="flex items-center border-b px-6 py-4">

          <Search size={22} className="text-gray-500" />

          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="ml-4 w-full bg-transparent text-lg outline-none"
          />

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-[500px] overflow-y-auto">

          {query && filteredProducts.length === 0 && (
            <p className="p-8 text-center text-gray-500">
              No products found.
            </p>
          )}

          {filteredProducts.map((product) => (
            <Link
              key={`${product.category}-${product.id}`}
              to={`/collections/${product.category}/${product.id}`}
              onClick={() => {
                setQuery("");
                onClose();
              }}
              className="flex items-center gap-4 border-b p-4 transition hover:bg-[#F8F4EC]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-semibold text-[#2F2115]">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm capitalize text-gray-500">
                  {product.category.replace(/-/g, " ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}