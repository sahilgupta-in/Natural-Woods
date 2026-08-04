export interface ProductReview {
  name: string;
  rating: number;
  comment: string;
}

export interface ProductItem {
  id: string | number;
  slug?: string;
  name: string;
  image: string;
  images?: string[];
  description?: string;
  dimensions?: string;
  medium?: string;
  material?: string;
  category?: string;
  collection?: string;
  designType?: string;
  price?: number;
  reviews?: ProductReview[];
  occasion?: string;
}

export function withProductDefaults(
  products: ProductItem[],
  category: string,
  basePrice: number
) {
  return products.map((product, index) => ({
    ...product,
    category,
    price: product.price ?? basePrice + index * 350,
    description:
      product.description ??
      `A handcrafted ${category.replace("-", " ")} artwork that brings timeless elegance to your space.`,
    dimensions: product.dimensions ?? "24 x 36 in",
    medium: product.medium ?? "Hand-painted acrylic on canvas",
    images: product.images ?? [product.image],
    reviews:
      product.reviews ?? [
        {
          name: "Asha M.",
          rating: 5,
          comment: "Beautiful craftsmanship and excellent support from the team.",
        },
      ],
    slug:
      product.slug ??
      `${product.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}-${product.id}`,
  }));
}
