import wall5 from "../assets/sculptures/wall5.webp";
import wall5copy from "../assets/sculptures/wall5copy.webp";

import wall6 from "../assets/sculptures/wall6.webp";
import wall6copy from "../assets/sculptures/wall6copy.webp";

import wall7 from "../assets/sculptures/wall7.webp";
import wall7copy from "../assets/sculptures/wall7copy.webp";
import type { ProductItem } from "./productHelpers";

export const pumpkinLampProducts: ProductItem[] = [
  {
    id: "pumpkin-lamp-1",
    slug: "handcrafted-wooden-spiral-ambient-table-lamp",
    name: "Handcrafted Wooden Spiral Ambient Table Lamp",
    image: wall5copy,
    images: [wall5, wall5copy],
    material: "Pumpkin",
    dimensions: '10 x 12 inches',
    description:
      "Transform your space with this handcrafted wooden spiral table lamp, designed to cast mesmerizing ambient light patterns through its precision-cut perforations. Featuring a graceful teardrop silhouette and premium wood construction, this artistic lighting piece blends craftsmanship with modern elegance, creating a warm and inviting atmosphere for any interior.",
  },
  {
    id: "pumpkin-lamp-2",
    slug: "handcrafted-spiral-wooden-ambient-table-lamp",
    name: "Handcrafted Spiral Wooden Ambient Table Lamp",
    image: wall6copy,
    images: [wall6, wall6copy],
    material: "Pumpkin",
    dimensions: '10 x 12 inches',
    description:
      "Illuminate your space with this handcrafted wooden ambient table lamp featuring elegant spiral perforated patterns. Its sculptural design creates mesmerizing warm light projections, blending artistic craftsmanship with functional lighting. Perfect for modern, rustic, and contemporary interiors, this decorative lamp adds sophistication, warmth, and a calming atmosphere to any living space.",
  },
  {
    id: "pumpkin-lamp-3",
    slug: "handmade-pumpkin-cat-table-lamp",
    name: "Handmade Pumpkin Cat Table Lamp with Warm Glow",
    image: wall7copy,
    images: [wall7, wall7copy],
    material: "Pumpkin",
    dimensions: '12 x 12 inches',
    description:
      "Add warmth and artistic charm to your home with this handmade pumpkin cat lamp. Expertly carved with intricate feline silhouettes and fine perforated patterns, it creates mesmerizing ambient lighting and decorative shadows. Crafted from natural wood, this unique lamp beautifully combines traditional craftsmanship with contemporary home décor, making every space inviting.",
  },
];
