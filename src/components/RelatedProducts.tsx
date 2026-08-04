import { Link } from "react-router-dom";
import type { ProductItem } from "../Data/productHelpers";
import { getCategoryPath } from "../Data/catalog";

interface RelatedProductsProps {
  products: ProductItem[];
  category: string;
  currentProductId?: string | number;
}

export default function RelatedProducts({ products, category, currentProductId }: RelatedProductsProps) {
  const filteredProducts = products.filter((product) => product.id !== currentProductId);

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#2F2115]" >
          You May Also Like
        </h2>
        <Link to={getCategoryPath(category)} className="text-sm font-medium text-[#C79A3B] transition hover:text-[#9d7426]">
          View all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/collections/${category}/${product.id}`} className="overflow-hidden rounded-3xl  bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm font-medium text-[#C79A3B]">{product.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#2F2115]">{product.name}</h3>
              
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}