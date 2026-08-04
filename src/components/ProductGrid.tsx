import ProductCard from "./ProductCard";
import { products } from "../Data/products";

interface Props {
  search: string;
}

export default function ProductGrid({ search }: Props) {
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {filtered.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}