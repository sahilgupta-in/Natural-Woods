import { type ProductItem, withProductDefaults } from "./productHelpers";
import { abstractProducts } from "./abstractProducts";
import { humanFigureProducts } from "./humanFigureProducts";
import { historicalProducts } from "./historicalProducts";
import { natureProducts } from "./natureProducts";
import { spiritualProducts } from "./spiritualProducts";
import { wallArtProducts } from "./wallArt";
import { woodenSculptureProducts } from "./woodenSculptures";
import { woodenMementoProducts } from "./woodenMementos";
import { pumpkinLampProducts } from "./pumpkinLamps";


type CategorySlug =
  | "nature"
  | "human-figure"
  | "abstract"
  | "historical"
  | "spiritual"
  | "wallart"
  | "wooden-sculptures"
  | "wooden-mementos"
  | "pumpkin-lamps"
  

export interface CategoryConfig {
  slug: CategorySlug;
  title: string;
  description: string;
  products: ProductItem[];
}

const catalog: Record<CategorySlug, CategoryConfig> = {
  nature: {
    slug: "nature",
    title: "Nature Paintings",
    description:
      "Handcrafted nature-inspired artworks with rich texture and timeless warmth.",
    products: withProductDefaults(natureProducts, "nature", 1800),
  },

  "human-figure": {
    slug: "human-figure",
    title: "Human Figure Paintings",
    description:
      "Beautiful handcrafted wooden paintings showcasing human figures, portraits, emotions, and cultural expressions with exceptional craftsmanship.",
    products: withProductDefaults(humanFigureProducts, "human-figure", 2200),
  },

  abstract: {
    slug: "abstract",
    title: "Abstract Paintings",
    description:
      "Modern abstract compositions designed to elevate interiors with character.",
    products: withProductDefaults(abstractProducts, "abstract", 2600),
  },

  historical: {
    slug: "historical",
    title: "Historical Paintings",
    description:
      "Stories from the past rendered with classical detail and elegance.",
    products: withProductDefaults(historicalProducts, "historical", 3000),
  },

  spiritual: {
    slug: "spiritual",
    title: "Spiritual Paintings",
    description:
      "Sacred and serene compositions that bring calm and devotion to your space.",
    products: withProductDefaults(spiritualProducts, "spiritual", 2400),
  },


  wallart: {
    slug: "wallart",
    title: "Wall Art",
    description:
      "Premium handcrafted wooden wall art designed to enhance modern and traditional interiors.",
    products: withProductDefaults(wallArtProducts, "wallart", 2500),
  },

  "wooden-sculptures": {
    slug: "wooden-sculptures",
    title: "Wooden Sculptures",
    description:
      "Beautiful handcrafted wooden sculptures showcasing artistic craftsmanship.",
    products: withProductDefaults(
      woodenSculptureProducts,
      "wooden-sculptures",
      3500,
    ),
  },

  "wooden-mementos": {
    slug: "wooden-mementos",
    title: "Wooden Mementos",
    description:
      "Unique handcrafted wooden mementos perfect for gifts, awards, and keepsakes.",
    products: withProductDefaults(
      woodenMementoProducts,
      "wooden-mementos",
      2500,
    ),
  },

  "pumpkin-lamps": {
    slug: "pumpkin-lamps",
    title: "Pumpkin Lamps",
    description:
      "Handcrafted wooden pumpkin lamps designed to create a warm and elegant ambience.",
    products: withProductDefaults(pumpkinLampProducts, "pumpkin-lamps", 4500),
  },

};

const categoryListPaths: Partial<Record<CategorySlug, string>> = {
  "wooden-sculptures": "/collections/wooden-creations/sculptures",
  "wooden-mementos": "/collections/wooden-creations/mementos",
  "pumpkin-lamps": "/collections/wooden-creations/pumpkin-lamps",
  
};

export function getCategoryPath(category: string): string {
  return categoryListPaths[category as CategorySlug] ?? `/collections/${category}`;
}

export function getCategoryConfig(category: string): CategoryConfig | null {
  return catalog[category as CategorySlug] ?? null;
}

export function getProductByCategoryAndId(category: string, id: string) {
  const config = getCategoryConfig(category);

  if (!config) return null;

  return (
    config.products.find(
      (product) => String(product.id) === id || product.slug === id,
    ) ?? null
  );
}
export function getAllProducts() {
  return Object.values(catalog).flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      category: category.slug,
    }))
  );
}
