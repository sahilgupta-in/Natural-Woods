import sculpture1 from "../assets/sculptures/01.webp";
import sculpture0102 from "../assets/sculptures/01-02.webp";
import sculpture0102copy from "../assets/sculptures/01-02copy.webp";

import sculpture2 from "../assets/sculptures/02.webp";
import sculpture0202 from "../assets/sculptures/02-02.webp";
import sculpture0202copy from "../assets/sculptures/02-02copy.webp";

import wall8 from "../assets/sculptures/wall8.webp";
import wall8copy from "../assets/sculptures/wall8copy.webp";
import wall8img from "../assets/sculptures/wall8img.webp";
import type { ProductItem } from "./productHelpers";

export const woodenSculptureProducts: ProductItem[] = [
  {
    id: "1",
    slug: "lord-venkateswara-wooden-sculpture",
    name: "Lord Venkateswara Wooden Sculpture",
    image: sculpture2,
    images: [sculpture0202, sculpture0202copy, sculpture2],

    material: "Premium Wood",
    dimensions: "24 x 36 inches",
    description:
      "Celebrate timeless craftsmanship with this handcrafted Lord Venkateswara wooden sculpture. Intricately carved from premium wood, it showcases exquisite temple-inspired detailing, ornamental arches, and a rich natural finish. Designed to bring spiritual elegance and artistic beauty, this masterpiece enhances pooja rooms, living spaces, temples, and luxury interior décor with divine presence.",
    medium: "Natural Wood",

    designType:
      "Traditional South Indian Temple Art, Religious Wooden Sculpture",
    occasion: "Home Temple & Pooja Room, Spiritual Interior Decoration",
  },

  {
    id: "2",
    slug: "handcrafted-lord-ganesha-wooden-sculpture",
    name: "Handcrafted Lord Ganesha Wooden Sculpture",
    image: sculpture0102copy,
    images: [sculpture1, sculpture0102, sculpture0102copy],
    material: "Premium Wood",
    dimensions: '24 x 36 inches',
    description:
      "Invite prosperity and positivity into your space with this handcrafted Lord Ganesha wooden sculpture. Expertly carved from premium wood, it features intricate traditional detailing, an ornate temple-style arch, and a graceful standing posture. Its rich natural finish and exceptional craftsmanship make it a timeless centerpiece for spiritual and elegant interiors.",
    medium: "Natural Wood",

    designType: "Intricate Hand-Carved Designt, Religious Wooden Sculpture",
    occasion: "Home Temple & Pooja Room, Spiritual Interior Decoration",
  },

  {
    id: "wall8",
    slug: "handcrafted-wooden-elephant-wall-bracket",
    name: "Handcrafted Wooden Elephant Wall Bracket",
    image: wall8copy,
    images: [wall8, wall8img, wall8copy],
    material: "Premium Wood",
    description:
      "Bring timeless elegance to your interiors with this handcrafted wooden elephant wall bracket sculpture. Expertly carved from premium solid wood, it features intricate traditional detailing, a majestic elephant design, and a rich antique finish. Perfect as a decorative wall accent, it adds heritage charm, strength, and sophistication to any living space.",
    dimensions: '8 x 18 inches',
    medium: "Natural Wood",

    designType: " Traditional Indian Wood Carving, Elephant Wall Bracket",
    occasion: "Living Room Wall Decor, Entrance & Foyer Decoration",
  },
];
